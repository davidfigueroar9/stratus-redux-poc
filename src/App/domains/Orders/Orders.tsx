import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import OrderList from "./pages/OrderList";

function Orders() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <OrderList />
      </Route>
      <Route path={`${path}/:id`}>Orders Details</Route>
    </Switch>
  );
}

export default Orders;
