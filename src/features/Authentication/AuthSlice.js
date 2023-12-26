import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  isLogin: false,
  user: null,
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = true;
      state.user = null;
      state.accessToken = "";
      state.refreshToken = "";
      state.isLoading = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = true;
      state.isLoading = false;
      state.token = action.payload.token.accessToken;
      state.refreshToken = action.payload.token.refreshToken;
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.token.accessToken);
      localStorage.setItem("refreshToken", action.payload.token.refreshToken);
    });
    builder.addCase(login.rejected, (state) => {
      state.isLogin = false;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      console.log(action.payload);
      state.token = action.payload.token.accessToken;
      localStorage.setItem("token", action.payload.token.accessToken);
    });
    builder.addCase(refresh.rejected, (state, action) => {
      console.log(action.payload);
      state.token = "";
      state.isLogin = false;
      state.refreshToken = "";
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    });
  },
});
