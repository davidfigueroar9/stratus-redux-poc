import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducer";
import { setTokenToAxiosIntance } from "./axios";

export type RootState = ReturnType<typeof rootReducer>;

function getPersistedState() {
  try {
    const persistedState: RootState = localStorage.getItem("appState")
      ? JSON.parse(localStorage.getItem("appState") || "")
      : {};
    const token = persistedState.auth.data?.accessToken;
    if (token) {
      setTokenToAxiosIntance(token);
    }
    return persistedState;
  } catch (err) {
    console.log(err);
  }
  return {};
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPersistedState(),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

store.subscribe(() => {
  localStorage.setItem("appState", JSON.stringify(store.getState()));
});

export default store;
