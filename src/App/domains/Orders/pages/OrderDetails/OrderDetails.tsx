import React, { useEffect } from "react";

import { useAppDispatch } from "App/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PageLayout from "components/PageLayout";
import Loading from "components/Loading";

import { fetchOrderById, cleanUpDetails } from "../../ordersSlice";

import { getOrderDetailsWithStatus } from "../../ordersSelectors";

function OrderDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { isError, isLoading, orderDetails } = useSelector(
    getOrderDetailsWithStatus
  );

  useEffect(() => {
    const promise = dispatch(fetchOrderById(id));
    return () => {
      promise.abort();
      dispatch(cleanUpDetails());
    };
  }, [dispatch, id]);

  return (
    <PageLayout title="Order Details" logout backPath="/orders">
      <Loading isLoading={isLoading} />
      {isError && (
        <div className="notification is-danger m-3">
          Error al cargar la orden
        </div>
      )}
      {orderDetails && (
        <div className="m-3">
          <div className="card ">
            <header className="card-header">
              <p className="card-header-title">Order #{orderDetails.number}</p>
            </header>
            <div className="card-content">
              <p>SubTotal: {orderDetails.subtotal.amount}</p>
              <p>Total: {orderDetails.total.amount}</p>
            </div>
          </div>
          <div className="card mt-3">
            <header className="card-header">
              <p className="card-header-title">Cliente</p>
            </header>
            <div className="card-content">
              <p>
                Nombre: {orderDetails.consumer.first_name}{" "}
                {orderDetails.consumer.last_name}
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <header className="card-header">
              <p className="card-header-title">Productos</p>
            </header>
            <div className="card-content">
              {orderDetails.products.map((product) => (
                <div className="media" key={product.title}>
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={product.photo_url} alt="" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-6">{product.title}</p>
                    <p className="subtitle is-6">
                      Cantidad: {product.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default OrderDetails;
