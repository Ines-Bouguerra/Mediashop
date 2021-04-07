import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';
import { categoryList } from './category';
import { compareReducer, productDetailsReducer, productListReducer } from './product';
export default combineReducers({
  alert,
  authReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  categoryList: categoryList,
  compare: compareReducer,
});
