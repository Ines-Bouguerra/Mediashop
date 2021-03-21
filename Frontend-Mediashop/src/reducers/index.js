import { combineReducers } from "redux";
import alert from "./alert";
import authReducer from "./authReducer";
import product from "./product";
import category from "./category";

export default combineReducers({
  alert,
  authReducer,
  product,
  category,
});
