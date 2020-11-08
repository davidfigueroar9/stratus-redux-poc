import axios from "App/axios";
import { OrderDetailsType, orderShape, FiltersType } from "./types";

const fetchOrders = async ({ page }: FiltersType): Promise<orderShape[]> => {
  const { data }: { data: orderShape[] } = await axios.get(
    `/v1/orders?page=${page}`
  );
  return data;
};

const fetchOrderById = async (id: string): Promise<OrderDetailsType> => {
  const { data }: { data: OrderDetailsType } = await axios.get(
    `/v1/orders/${id}`
  );
  return data;
};

const ordersService = {
  fetchOrders,
  fetchOrderById,
};

export default ordersService;
