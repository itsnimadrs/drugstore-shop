import axios from "axios";
import { BASE_URL } from "./api";

export default  axios.create({baseURL: BASE_URL})
axios.defaults.baseURL = BASE_URL;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export const endpoints = {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    signup: '/api/auth/signup',
    token: '/api/auth/token',
    user: '/api/users/me',
  };

  // export async function fetchWrapper(endpoint: string, opts: {
  //   method: string;
  //   headers?: { [key: string]: string };
  //   mode?: string;
  //   body?: { [key: string]: any } | string;
  // }) {
  //   opts.headers = {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     ...opts.headers,
  //   };
  //   opts.mode = 'cors';
  //   if (opts.body) {
  //     opts.body = JSON.stringify(opts.body);
  //   }
  //   return fetch(`${BASE_URL}${endpoint}` , opts as RequestInit);
  // }