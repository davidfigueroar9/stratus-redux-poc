import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "./authService";

export enum statusType {
  idle = "idle",
  loading = "loading",
  error = "error",
  success = "success",
}

interface AuthDataInterface {
  accessToken: string;
  country: string;
  name: string;
  storeId: string;
}

interface AuthSchema {
  status: statusType;
  data: AuthDataInterface | null;
}

const initialState: AuthSchema = {
  status: statusType.idle,
  data: null,
};

export const login = createAsyncThunk<
  AuthDataInterface,
  { email: string; password: string }
>("auth/fetchLogin", async ({ email, password }) => {
  const data = await AuthServices.login(email, password);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = statusType.loading;
      return state;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = statusType.success;
      return state;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.data = null;
      state.status = statusType.error;
      return state;
    });
  },
});

export const { reducer } = authSlice;

export const { logout } = authSlice.actions;
