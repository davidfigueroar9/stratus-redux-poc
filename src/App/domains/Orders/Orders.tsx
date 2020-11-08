import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import classnames from "classnames";
import OrderList from "./pages/OrderList";
import OrderDetails from "./pages/OrderDetails";

function Orders() {
  const { path } = useRouteMatch();
  const isDetails = useRouteMatch(`/orders/:id`);
  const orderClassname = classnames({
    "is-hidden": isDetails,
  });
  return (
    <>
      <div
        className={orderClassname}
        style={{ height: "100vh", overflow: "auto" }}
      >
        <OrderList />
      </div>
      <Switch>
        <Route path={`${path}/:id`}>
          <OrderDetails />
        </Route>
      </Switch>
    </>
  );
}

export default Orders;
