import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainComponent from "../components/admin/MainComponent";
import AuthHandler from "./AuthHandler";

 var PrivateRouteNew = ({ page, activepage, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthHandler.loggedIn() ? (
          <MainComponent page={page} activepage={activepage} {...props} />
        ) : (
          <Redirect to="/admin/home" />
        )
      }
    />
  );
};
export default PrivateRouteNew;