import React from "react";
import { useSelector } from "react-redux";
import Login from "../../../Pages/login/Login";

export const WithGuard = (Component) => (props) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return isLogin ? <Component {...props} /> : <Login shouldNavigate={false} />;
};