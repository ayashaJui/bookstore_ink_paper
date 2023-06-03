import axios from "axios";
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants/cart";

export const addToCart =
  (id, quantity, formatType) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:5000/api/books/${id}`);

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
