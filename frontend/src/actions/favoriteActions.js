import axios from "axios";
import {
  ADD_ITEM_TO_FAVORITE,
  REMOVE_ITEM_FROM_FAVORITE,
} from "../constants/favorite";

const bookUrl = `${process.env.REACT_APP_BASE_URL}/api/books`;

export const addToFavorite = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`${bookUrl}/${id}`);

  dispatch({
    type: ADD_ITEM_TO_FAVORITE,
    payload: {
      book: data._id,
      title: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      offer: data.offer,
    },
  });

  localStorage.setItem(
    "favoriteItems",
    JSON.stringify(getState().favorite.favoriteItems)
  );
};

export const removeFromFavorite = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_FROM_FAVORITE,
    payload: id,
  });

  localStorage.setItem(
    "favoriteItems",
    JSON.stringify(getState().favorite.favoriteItems)
  );
};
