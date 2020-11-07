import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ordersService, { orderShape } from "./ordersService";
import { getFiltersPage } from "./ordersSelectors";
import { RootState } from "App/store";

type orderEntitiesType = {
  [key: string]: orderShape;
};

type FiltersType = {
  page: number;
};

interface OrdersSchema {
  entities: orderEntitiesType;
  status: string;
  ids: string[];
  filters: FiltersType;
}

const initialState: OrdersSchema = {
  status: "idle",
  entities: {},
  filters: {
    page: 1,
  },
  ids: [],
};

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
    fetch(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { reducer } = ordersSlice;

export const { fetch } = ordersSlice.actions;
