import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ordersService, { orderShape, OrderDetailsType } from "./orderService";
import { getFiltersPage } from "./ordersSelectors";
import { RootState } from "App/store";
import { logout } from "App/domains/Auth";

type orderEntitiesType = {
  [key: string]: orderShape;
};

type OrderEntitiesDetatilsType = {
  data: OrderDetailsType | null;
  status: string;
};

type FiltersType = {
  page: number;
};

interface OrdersSchema {
  entities: orderEntitiesType;
  entityDetails: OrderEntitiesDetatilsType;
  status: string;
  ids: string[];
  filters: FiltersType;
}

const initialState: OrdersSchema = {
  status: "idle",
  entities: {},
  entityDetails: {
    status: "idle",
    data: null,
  },
  filters: {
    page: 1,
  },
  ids: [],
};

export const fetchOrderById = createAsyncThunk<OrderDetailsType, string>(
  "orders/fetchOrderById",
  async (id) => {
    const data = await ordersService.fetchOrderById(id);
    return data;
  }
);

export const fetchOrders = createAsyncThunk<{
  data: orderShape[];
  page: number;
}>("orders/fetchOrders", async () => {
  const data = await ordersService.fetchOrders({ page: 1 });
  return { data, page: 1 };
});

export const fetchMoreOrders = createAsyncThunk<
  { data: orderShape[]; page: number },
  undefined,
  {
    state: RootState;
  }
>("orders/fetchMoreOrders", async (_, { getState }) => {
  const state = getState();
  const page = getFiltersPage(state);
  const data = await ordersService.fetchOrders({ page: page + 1 });
  return { data, page: page + 1 };
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    cleanUpDetails(state) {
      state.entityDetails = initialState.entityDetails;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.toString(), (state) => {
      state = initialState;
      return state;
    });

    builder.addCase(fetchOrders.pending, (state) => {
      state.status = "loading";
      return state;
    });

    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const ids: string[] = [];
      state.entities = action.payload.data.reduce((acc, order) => {
        acc[order.id] = order;
        ids.push(order.id);
        return acc;
      }, {} as orderEntitiesType);
      state.status = "success";
      state.ids = ids;
      state.filters.page = action.payload.page;
      return state;
    });

    builder.addCase(fetchMoreOrders.pending, (state) => {
      state.status = "loading";
      return state;
    });

    builder.addCase(fetchMoreOrders.fulfilled, (state, action) => {
      const ids: string[] = [];
      action.payload.data.forEach((order) => {
        state.entities[order.id] = order;
        ids.push(order.id);
      });
      state.status = "success";
      state.ids = state.ids.concat(ids);
      state.filters.page = action.payload.page;
      return state;
    });

    builder.addCase(fetchMoreOrders.rejected, (state) => {
      state.status = "error";
      return state;
    });

    builder.addCase(fetchOrders.rejected, (state) => {
      state.status = "error";
      return state;
    });

    builder.addCase(fetchOrderById.pending, (state, action) => {
      state.entityDetails.status = "loading";
      state.entityDetails.data = null;
      return state;
    });

    builder.addCase(fetchOrderById.rejected, (state, action) => {
      state.entityDetails.status = "error";
      state.entityDetails.data = null;
      return state;
    });

    builder.addCase(fetchOrderById.fulfilled, (state, action) => {
      state.entityDetails.data = action.payload;
      state.entityDetails.status = "idle";
      return state;
    });
  },
});

export const { reducer } = ordersSlice;

export const { cleanUpDetails } = ordersSlice.actions;
