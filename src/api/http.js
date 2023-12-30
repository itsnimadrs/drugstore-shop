import axios from "axios";
import { BASE_URL } from "./api";
import { store } from "../store";
import { refreshTokenThunk } from "../features/auth";

export const api = axios.create({ baseURL: BASE_URL });

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const state = store.getState();
    const { accessToken, isLogin } = state.auth;
    if (isLogin) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
let isRefreshingToken = false;

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const state = store.getState();
    const refreshToken = state.auth.refreshToken;

    if (error?.response?.status === 401) {
      const originalRequest = error.config;
      if (!isRefreshingToken) {
        isRefreshingToken = true;

        return store
          .dispatch(refreshTokenThunk({ refreshToken }))
          .unwrap()
          .then((data) => {
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${data.accessToken}`;
            return api(originalRequest);
          })
          .catch((error) => {
            throw error;
          })
          .finally(() => {
            isRefreshingToken = false;
          });
      }
    }
    return Promise.reject(error);
  }
);
