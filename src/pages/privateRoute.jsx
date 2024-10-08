import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isloggedIn = true;
  return isloggedIn ? <>{props.children}</> : <Navigate to="/admin" />;
};

export default PrivateRoute;
