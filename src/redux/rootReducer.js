import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { ProcuctList } from "./productReducer";

const rootReducer = combineReducers({
  cartData,
  ProcuctList,
});

export default rootReducer;
