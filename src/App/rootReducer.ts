import { combineReducers } from "redux";
import { reducer as AuthReducer } from "./domains/Auth";
import { reducer as OrdersReducer } from "./domains/Orders";

const rootReducer = combineReducers({
  auth: AuthReducer,
  orders: OrdersReducer,
});

export default rootReducer;
