import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "App/store";
import PageLayout from "components/PageLayout";
import Loading from "components/Loading";

import { fetchOrders, fetchMoreOrders } from "../../ordersSlice";
import { getOrdersList } from "../../ordersSelectors";

import OrdersListItem from "./OrderListItem";

function OrdersList() {
  const dispatch = useAppDispatch();
  const { ids, isLoading } = useSelector(getOrdersList);

  useEffect(() => {
    const promise = dispatch(fetchOrders());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const shouldShowSpinner = isLoading && ids.length === 0;

  const handleLoadMore = () => {
    dispatch(fetchMoreOrders());
  };

  return (
    <PageLayout title="Ordenes" logout>
      <Loading isLoading={shouldShowSpinner} />
      {!shouldShowSpinner && (
        <div className="card p-3 container">
          {ids.map((id) => (
            <OrdersListItem key={id} id={id} />
          ))}
          <Loading isLoading={!shouldShowSpinner && isLoading} />
          {!isLoading && (
            <div className="button" onClick={handleLoadMore}>
              Cargar Mas
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
}

export default OrdersList;
