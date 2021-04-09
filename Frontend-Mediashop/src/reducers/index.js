import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';
import { categoryList, subcategoryList } from './category';
import { compareReducer, productDetailsReducer, productListReducer } from './product';
export default combineReducers({
  alert,
  user:authReducer,
  authReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  categoryList: categoryList,
  subcategoryList: subcategoryList,
  compare: compareReducer,
});
