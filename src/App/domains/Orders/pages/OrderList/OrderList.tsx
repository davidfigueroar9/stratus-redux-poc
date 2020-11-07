import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "App/store";
import { fetchOrders, fetchMoreOrders } from "../../ordersSlice";
import { getOrdersList } from "../../ordersSelectors";

import OrdersListItem from "./OrderListItem";

function OrdersList() {
  const dispatch = useAppDispatch();
  const { ids, isLoading } = useSelector(getOrdersList);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const shouldShowSpinner = isLoading && ids.length === 0;

  const handleLoadMore = () => {
    dispatch(fetchMoreOrders());
  };

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Tienda Nube</h1>
            <p>Orders List</p>
          </div>
        </div>
      </section>
      <div className="p-3">
        {shouldShowSpinner && (
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        )}
      </div>

      {!shouldShowSpinner && (
        <div className="card p-3">
          {ids.map((id) => (
            <OrdersListItem key={id} id={id} />
          ))}
          {!shouldShowSpinner && isLoading && (
            <div className="p-3">
              <progress className="progress is-small is-primary" max="100">
                15%
              </progress>
            </div>
          )}
          {!isLoading && (
            <div className="button" onClick={handleLoadMore}>
              Cargar Mas
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default OrdersList;
