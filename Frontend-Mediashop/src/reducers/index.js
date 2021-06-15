import { combineReducers } from "redux";
import alert from "./alert";
import authReducer from "./authReducer";
import {
  categoryList,
  deleteCategoryReducer,
  subcategoryList,
} from "./category";
import contact from "./contact";
import {
  brandListReducer,
  deleteBrandReducer,
  brandCreateReducer,
  brandDetailsReducer,
  brandUpdateReducer,
} from "./brand";
import {
  productByCategoryReducer,
  productDetailsReducer,
  productListReducer,
  productTopPromotionReducer,
  productCompareReducer,
} from "./product";
export default combineReducers({
  alert,
  user: authReducer,
  authReducer,
  categoryList: categoryList,
  categoryDelete: deleteCategoryReducer,
  subcategoryList: subcategoryList,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productTopPromotion: productTopPromotionReducer,
  productByCategory: productByCategoryReducer,
  productCompare: productCompareReducer,
  contact: contact,
  brandDelete: deleteBrandReducer,
  brandList: brandListReducer,
  brandCreate: brandCreateReducer,
  brandDetails: brandDetailsReducer,
  brandUpdate: brandUpdateReducer,
});
