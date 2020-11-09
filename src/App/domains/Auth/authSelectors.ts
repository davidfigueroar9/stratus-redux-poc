import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { statusType } from "./authSlice";

export const getAuth = (state: RootState) => state.auth;

export const getAuthStatus = createSelector(getAuth, (auth) => auth.status);

export const getAuthData = createSelector(getAuth, (auth) => auth.data);

export const isUserLogin = createSelector(
  getAuthData,
  (data) => !!data?.accessToken
);

export const getLoginStatus = createSelector(
  getAuthStatus,
  isUserLogin,
  (status, isLogin) => ({
    isLogin,
    isError: status === statusType.error,
    isLoading: status === statusType.loading,
  })
);
