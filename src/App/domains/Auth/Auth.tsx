import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

function Auth() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Redirect to={`${path}/login`} />
      </Route>
      <Route path={`${path}/login`}>
        <LoginPage />
      </Route>
      <Route exact path={`${path}/logout`}>
        <LogoutPage />
      </Route>
    </Switch>
  );
}

export default Auth;
