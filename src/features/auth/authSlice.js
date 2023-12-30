import { createSlice } from "@reduxjs/toolkit";
import { loginUser, refreshTokenThunk } from "./authThunk";

// **********************************
const initialState = {
  user: null,
  // isLogin: localStorage.getItem("accessToken") ? true : false,
  isLogin: false,
  isLoading: false,
  // accessToken: localStorage.getItem("accessToken") || "",
  // refreshToken: localStorage.getItem("refreshToken") || "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.user = null;
      state.isLogin = true;
      state.isLoading = false;
      state.accessToken = "";
      state.refreshToken = "";
      // localStorage.removeItem("accessToken");
      // localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = true;
      state.isLoading = false;
      state.accessToken = action.payload.token.accessToken;
      state.refreshToken = action.payload.token.refreshToken;
      state.user = action.payload.data.user;
      // localStorage.setItem("accessToken", action.payload.token.accessToken);
      // localStorage.setItem("refreshToken", action.payload.token.refreshToken);
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
    });
    builder.addCase(refreshTokenThunk.fulfilled, (state, action) => {
      state.accessToken = action.payload.token.accessToken;
      // localStorage.setItem("accessToken", action.payload.token.accessToken);
    });
    builder.addCase(refreshTokenThunk.rejected, (state) => {
      state.isLogin = false;
      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
      state.isLoading = false;
      // localStorage.removeItem("accessToken");
      // localStorage.removeItem("refreshToken");
    });
  },
});

export const { logout } = auth.actions;

export default auth.reducer;
