import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "App/store";

export const getOrdersState = (state: RootState) => state.orders;

export const getOrdersIds = createSelector(
  getOrdersState,
  (orderState) => orderState.ids
);

export const getOrdersList = createSelector(
  getOrdersState,
  getOrdersIds,
  (orderState, ids) => ({
    isLoading: orderState.status === "loading",
    isError: orderState.status === "error",
    ids,
  })
);

export const getEntities = createSelector(
  getOrdersState,
  (orderState) => orderState.entities
);

export const getFilters = createSelector(
  getOrdersState,
  (orderState) => orderState.filters
);

export const getFiltersPage = createSelector(
  getFilters,
  (filters) => filters.page
);

const getEntityById = (_: RootState, id: string) => id;

export const getOrderById = createSelector(
  getEntities,
  getEntityById,
  (entities, id) => entities[id]
);

export const getOrderDetails = createSelector(
  getOrdersState,
  (orderState) => orderState.entityDetails
);

export const getOrderDetailsWithStatus = createSelector(
  getOrderDetails,
  (orderState) => ({
    isLoading: orderState.status === "loading",
    isError: orderState.status === "error",
    orderDetails: orderState.data,
  })
);
