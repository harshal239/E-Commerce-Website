import { combineReducers } from "redux";
import {
  productReducer,
  productCreateReducer,
  productUpdateReducer,
  productDeleteReducer,
  productFilterReducer,
} from "./productReducer";

const reducers = combineReducers({
  allproducts: productReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  filteredProducts: productFilterReducer,
});

export default reducers;
