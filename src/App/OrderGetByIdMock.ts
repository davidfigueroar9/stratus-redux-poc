const data = {
  created_at: "2020-10-30T20:12:11+0000",
  id: "291581898",
  number: 1480,
  origin: "store",
  status: "archived",
  subtotal: {
    amount: 9865.94,
    currency: "ARS",
  },
  total: {
    amount: 8879.35,
    currency: "ARS",
  },
  logEntries: [
    {
      happened_at: "2020-10-30T20:12:38+0000",
      type: "order-fulfillment",
      data_2: "unfulfilled",
    },
    {
      happened_at: "2020-10-30T20:12:41+0000",
      type: "order-payment",
      data_2: "paid",
    },
    {
      happened_at: "2020-10-30T20:16:30+0000",
      type: "order-fulfillment",
      data_2: "fulfilled",
    },
    {
      happened_at: "2020-11-06T22:30:54+0000",
      type: "order-status",
      data_2: "closed",
    },
  ],
  payment: {
    gateway: "offline",
    status: "paid",
  },
  consumer: {
    remarks: "",
    email: "everton.projetos@gmail.com",
    first_name: "Everton Paula",
    last_name: "Everton Paula",
    id_document: "20855083",
    phone_number: "+541111223344",
  },
  billing_address: {
    street: "Calle ",
    locality: "",
    floor: "",
    country: "AR",
    city: "Capital Federal",
    number: "31 ",
    province: "Capital Federal",
    zipcode: "1249",
  },
  discounts: {
    coupon: {
      amount: 0,
      currency: "ARS",
      codes: [],
    },
    gateway: {
      amount: 986.59,
      currency: "ARS",
    },
  },
  fulfillment: {
    status: "shipped",
    preference: {
      type: "delivery",
      option: "OCA Estándar - Envío a domicilio",
      shipping_cost: {
        currency: "ARS",
        amount: 500.59,
        discont: 500.59,
      },
      weight: 0,
      carrier: "oca-partner-ar",
      delivery_address: {
        city: "Capital Federal",
        province: "Capital Federal",
        zipcode: "1249",
        country: "AR",
        floor: "",
        locality: "",
        street: "Calle ",
        number: "31 ",
      },
    },
  },
  products: [
    {
      photo_url:
        "https://d26lpennugtm8s.cloudfront.net/stores/239/907/products/916198-mla31833761439_082019-f-1421cf20399c92424e15701081240489-1024-1024.jpg",
      quantity: 2,
      title: "Producto",
      unit_price: {
        amount: 4932.97,
        currency: "ARS",
      },
      variant_combination: [],
    },
  ],
};

export default data;
