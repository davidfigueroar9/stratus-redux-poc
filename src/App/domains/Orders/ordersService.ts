import axios from "../../axios";

type product = {
  name: string;
  price: number;
  quantity: number;
  imagen: string;
};

type customer = {
  name: string;
};

type fulfillment = {
  type: string;
};

export type orderShape = {
  id: string;
  number: number;
  created_at: string;
  status: string;
  payment_status: string;
  shipping_status: string;
  price: number;
  customer: customer;
  products_count: number;
  shipping_option: string;
  currency: string;
  gateway: string;
  note: string;
  owner_note: string;
  products: product[];
  fulfillment_preference: fulfillment;
};

export type FiltersType = {
  page: number;
};

const fetchOrders = async ({ page }: FiltersType): Promise<orderShape[]> => {
  const { data }: { data: orderShape[] } = await axios.get(
    `/v1/orders?page=${page}`
  );

  return data;
};

const ordersService = {
  fetchOrders,
};

export default ordersService;
