import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_CREATE_SUCCESS,
  PRODUCTS_CREATE_FAIL,
  PRODUCTS_CREATE_REQUEST,
  PRODUCTS_UPDATE_FAIL,
  PRODUCTS_UPDATE_REQUEST,
  PRODUCTS_UPDATE_SUCCESS,
  PRODUCTS_DELETE_FAIL,
  PRODUCTS_DELETE_REQUEST,
  PRODUCTS_DELETE_SUCCESS,
  PRODUCTS_FILTER_FAIL,
  PRODUCTS_FILTER_REQUEST,
  PRODUCTS_FILTER_SUCCESS,
} from "../Constants/products-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true };
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: payload };
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case PRODUCTS_CREATE_REQUEST:
      return { loading: true };
    case PRODUCTS_CREATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCTS_CREATE_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case PRODUCTS_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCTS_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCTS_UPDATE_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case PRODUCTS_DELETE_REQUEST:
      return { loading: true };
    case PRODUCTS_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCTS_DELETE_FAIL:
      return { loading: false, error: payload, success: false };

    default:
      return state;
  }
};

export const productFilterReducer = (
  state = { filteredProducts: [] },
  { type, payload }
) => {
  switch (type) {
    case PRODUCTS_FILTER_REQUEST:
      return { loading: true };
    case PRODUCTS_FILTER_SUCCESS:
      return { loading: false, filteredProducts: payload };
    case PRODUCTS_FILTER_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
