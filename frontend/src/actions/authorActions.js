import axios from "axios";

import {
  AUTHOR_LIST_FAIL,
  AUTHOR_LIST_REQUEST,
  AUTHOR_LIST_SUCCESS,
  AUTHOR_POPULAR_FAIL,
  AUTHOR_POPULAR_REQUEST,
  AUTHOR_POPULAR_SUCCESS,
} from "../constants/author";

export const getAllAuthors = () => async (dispatch) => {
  try {
    dispatch({
      type: AUTHOR_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/authors`);

    dispatch({
      type: AUTHOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTHOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFavoriteAuthors = () => async (dispatch) => {
  try {
    dispatch({
      type: AUTHOR_POPULAR_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/authors/popular`
    );

    dispatch({
      type: AUTHOR_POPULAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTHOR_POPULAR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
