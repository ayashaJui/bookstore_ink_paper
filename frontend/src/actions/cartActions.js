import axios from "axios";
import {
  ADD_ITEM_TO_CART,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_ITEM_FROM_CART,
} from "../constants/cart";

const bookUrl = `${process.env.REACT_APP_BASE_URL}/api/books`;

export const addToCart =
  (id, quantity, formatType) => async (dispatch, getState) => {
    const { data } = await axios.get(`${bookUrl}/${id}`);

    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        book: data._id,
        title: data.title,
        image: data.image,
        price: data.price,
        format: data.format,
        countInStock: data.countInStock,
        offer: data.offer,
        formatType,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
