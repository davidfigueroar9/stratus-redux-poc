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

type CurrencyType = {
  amount: number;
  currency: string;
};

type CurrencyDiscountType = CurrencyType & {
  discont: number;
};

type LogType = {
  happened_at: string;
  type: string;
  data_2: string;
};

type PaymentType = {
  gateway: string;
  status: string;
};

type ConsumerDetailsType = {
  remarks: string;
  email: string;
  first_name: string;
  last_name: string;
  id_document: string;
  phone_number: string;
};

type AddressType = {
  street: string;
  locality: string;
  floor: string;
  country: string;
  city: string;
  number: string;
  province: string;
  zipcode: string;
};

type FulfillmentPreferenceDetailsType = {
  type: string;
  option: string;
  shipping_cost: CurrencyDiscountType;
  weight: number;
  carrier: string;
  delivery_address: AddressType;
};

type FulfillmentDetailsType = {
  status: string;
  preference: FulfillmentPreferenceDetailsType;
};

type CouponType = CurrencyType & {
  codes: any[];
};

type DiscountsType = {
  coupon: CouponType;
  gateway: CurrencyType;
};

export type OrderDetailsType = {
  created_at: string;
  id: string;
  number: number;
  origin: string;
  status: string;
  subtotal: CurrencyType;
  total: CurrencyType;
  logEntries: LogType[];
  payment: PaymentType;
  consumer: ConsumerDetailsType;
  billing_address: AddressType;
  discounts: DiscountsType;
  fulfillment: FulfillmentDetailsType;
  products: ProductDetailsType[];
};

type VariantCombinationType = {
  name: string;
  value: string;
};

export type ProductDetailsType = {
  photo_url: string;
  quantity: number;
  title: string;
  unit_price: CurrencyType;
  variant_combination: VariantCombinationType[];
};
