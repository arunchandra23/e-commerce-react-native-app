import { combineReducers } from "redux";
import addToCartReducer from "./addToCartReducer";
import authReducer from "./authReducer";
import getProductByCategoryReducer from "./getProductByCategoryReducer";
import getProductByIdReducer from "./getProductByIdReducer";
import getProductByNameReducer from "./getProductByNameReducer";
import getProductsReducer from "./getProductsReducer";

export default combineReducers({
    products:getProductsReducer,
    selectedProduct:getProductByIdReducer,
    categoryProducts:getProductByCategoryReducer,
    cartItems:addToCartReducer,
    searchResults:getProductByNameReducer,
    token:authReducer
})