import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';
import category from './category';
import {productDetailsReducer, productListReducer} from './product';
export default combineReducers({
  alert,
  authReducer,
  productList:productListReducer,
  productDetails:productDetailsReducer,
  category,
});
