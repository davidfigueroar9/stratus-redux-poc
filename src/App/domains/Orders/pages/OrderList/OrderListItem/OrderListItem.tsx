import React from "react";
import { RootState } from "App/store";

import { useSelector } from "react-redux";
import { getOrderById } from "../../../ordersSelectors";

interface OrdersListInterface {
  id: string;
}

function OrdersList({ id }: OrdersListInterface) {
  const order = useSelector((state: RootState) => getOrderById(state, id));
  return (
    <div className="media-content">
      <p className="title is-4">{order.customer.name}</p>
      <p className="subtitle is-6">#{order.number}</p>
      <hr />
    </div>
  );
}

export default OrdersList;
