import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classnames from "classnames";

import { RootState } from "App/store";
import { getOrderById } from "../../../ordersSelectors";

interface OrdersListItemInterface {
  id: string;
}

function OrdersListItem({ id }: OrdersListItemInterface) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const order = useSelector((state: RootState) => getOrderById(state, id));
  const toggleDropdown = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen((o) => !o);
  };
  if (!order) {
    return null;
  }
  const dropdownClass = classnames("dropdown", {
    "is-active": isOpen,
  });
  return (
    <Link to={`/orders/${id}`} className="media-content">
      <p className="title is-4">{order.customer.name}</p>
      <p className="subtitle is-6">#{order.number}</p>
      <div className={dropdownClass}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu2"
            onClick={toggleDropdown}
          >
            <span>Productos</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content">
            {order.products.map((product) => (
              <div className="dropdown-item">
                <div className="media" key={product.name}>
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={product.imagen} alt="" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-6">{product.name}</p>
                    <p className="subtitle is-6">
                      Cantidad: {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />
    </Link>
  );
}

export default OrdersListItem;
