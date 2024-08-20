import { Route, Redirect } from "react-router-dom";

const privateRoute = ({ children, ...rest }) => {
  console.log(works);
  return <Route {...rest}>{children}</Route>;
};
