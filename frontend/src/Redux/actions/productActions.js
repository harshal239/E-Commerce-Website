import {
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_CREATE_FAIL,
  PRODUCTS_CREATE_REQUEST,
  PRODUCTS_CREATE_SUCCESS,
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
import product from "../../api/product";

export const productList = (sort) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_LIST_REQUEST,
    });

    const { data } = await product.get(`product/`, { params: { sort: sort } });

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createProductAction =
  (name, image, description, category, price, quantity) => async (dispatch) => {
    try {
      dispatch({
        type: PRODUCTS_CREATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await product.post(
        "/product",
        {
          name,
          image,
          description,
          category,
          price,
          quantity,
        },
        config
      );

      dispatch({
        type: PRODUCTS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCTS_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateProductAction =
  (id, name, image, description, category, price, quantity) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCTS_UPDATE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await product.patch(
        `/product/${id}`,
        { name, image, description, category, price, quantity },
        config
      );

      dispatch({
        type: PRODUCTS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: PRODUCTS_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteProductAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_DELETE_REQUEST,
    });

    const { data } = await product.delete(`/product/${id}`);

    dispatch({
      type: PRODUCTS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const productFilterList = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_FILTER_REQUEST,
    });

    const { data } = await product.get(`product/categories/${category}`);

    dispatch({
      type: PRODUCTS_FILTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_FILTER_FAIL,
      payload: message,
    });
  }
};
