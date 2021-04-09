import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return user && !user.isAuthenticated ? <Route {...rest} render={() => children} /> : <LoadingToRedirect />;

 };

export default AdminRoute;
