import { combineReducers } from 'redux';
import alert from './alert';
import authReducer from './authReducer';
import { categoryList, subcategoryList } from './category';
import contact from './contact';
import {productByCategoryReducer, productDetailsReducer, productListReducer, productTopPromotionReducer } from './product';
export default combineReducers({
  alert,
  user: authReducer,
  authReducer,
  categoryList: categoryList,
  subcategoryList: subcategoryList,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productTopPromotion: productTopPromotionReducer,
  productByCategory: productByCategoryReducer,
  contact:contact,
});
