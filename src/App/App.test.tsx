import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./domains/Auth/authService", () => ({
  login: (email: string, password: string) => {
    return Promise.resolve({
      accessToken:
        "e0up2ojd5m1kp59690eaaqpt89g0iadejr6adam9ckq41id9g2drkkethv9d1uop",
      storeId: "239907",
      name: "ocaemailsintag",
      defaultLanguage: "es",
      country: "AR",
    });
  },
}));

jest.mock("./domains/Orders/orderService", () => ({
  fetchOrders: () => {
    const ordersResponseMock = require("./ordersResponseMock").default;
    return Promise.resolve(ordersResponseMock);
  },
  fetchOrderById: () => {
    const ordersResponseMock = require("./OrderGetByIdMock").default;
    return Promise.resolve(ordersResponseMock);
  },
}));

describe("App Integrations test", () => {
  it("should show login page", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Tienda Nube/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should try to login", async () => {
    const { getByLabelText, getByText, getByTestId } = render(<App />);
    const emailInput = getByLabelText(/email/i);
    userEvent.type(emailInput, "test@tiendanube.com");
    const passwordInput = getByLabelText(/password/i);
    userEvent.type(passwordInput, "123456");
    const buttonLogin = getByText(/Iniciar sesion/i);
    userEvent.click(buttonLogin);

    await waitFor(() => {
      expect(getByText(/#1480/i)).toBeInTheDocument();
    });

    const orderItem = getByText(/#1480/i);

    userEvent.click(orderItem);

    await waitFor(() => {
      expect(getByText(/Order #1480/i)).toBeInTheDocument();
    });

    const OrderDetails = getByTestId("order-details");

    console.log(screen.debug(OrderDetails));
  });
});
