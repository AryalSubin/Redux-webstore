import { combineReducers } from "redux";
import { SelectedProduct } from "../actions/productActions";
import { productReducer, selectedProductedReducer } from "./productReducer";

const reducers = combineReducers({
  allProduct: productReducer,
  product: selectedProductedReducer,
});
export default reducers;
