import axios from "axios";

import {
  BOOK_AUTHOR_FAIL,
  BOOK_AUTHOR_REQUEST,
  BOOK_AUTHOR_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_FEATURED_FAIL,
  BOOK_FEATURED_REQUEST,
  BOOK_FEATURED_SUCCESS,
  BOOK_FORMAT_FAIL,
  BOOK_FORMAT_REQUEST,
  BOOK_FORMAT_SUCCESS,
  BOOK_GENRE_FAIL,
  BOOK_GENRE_REQUEST,
  BOOK_GENRE_SUCCESS,
  BOOK_LATEST_RELEASE_FAIL,
  BOOK_LATEST_RELEASE_REQUEST,
  BOOK_LATEST_RELEASE_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_POPULAR_FAIL,
  BOOK_POPULAR_REQUEST,
  BOOK_POPULAR_SUCCESS,
  BOOK_PUBLISHER_FAIL,
  BOOK_PUBLISHER_REQUEST,
  BOOK_PUBLISHER_SUCCESS,
  BOOK_SALE_FAIL,
  BOOK_SALE_REQUEST,
  BOOK_SALE_SUCCESS,
  BOOK_WITH_ORDERS_FAIL,
  BOOK_WITH_ORDERS_REQUEST,
  BOOK_WITH_ORDERS_SUCCESS,
} from "../constants/book";
import { logout } from "./userActions";

export const getAllBooks =
  (queryParams = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: BOOK_LIST_REQUEST,
      });

      let url = "";

      if (queryParams !== "") {
        url = `http://localhost:5000/api/books/search/?${queryParams}`;
      } else {
        url = `http://localhost:5000/api/books/`;
      }

      const { data } = await axios.get(url);

      dispatch({
        type: BOOK_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getBookById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/books/${id}`);

    dispatch({
      type: BOOK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllGenres = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_GENRE_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/books/genres`);

    dispatch({
      type: BOOK_GENRE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_GENRE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllBookAuthors = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_AUTHOR_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/books/authors`);

    dispatch({
      type: BOOK_AUTHOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_AUTHOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllFormats = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_FORMAT_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/books/formats`);

    dispatch({
      type: BOOK_FORMAT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_FORMAT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllPublishers = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_PUBLISHER_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/books/publishers`
    );

    dispatch({
      type: BOOK_PUBLISHER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_PUBLISHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLatestRelease = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_LATEST_RELEASE_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/books/latestRelease`
    );

    dispatch({
      type: BOOK_LATEST_RELEASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_LATEST_RELEASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPopularBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_POPULAR_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/books/popular`);

    dispatch({
      type: BOOK_POPULAR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_POPULAR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFeaturedBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_FEATURED_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/books/featured`
    );

    dispatch({
      type: BOOK_FEATURED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_FEATURED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSaleBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_SALE_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/books/sale`);

    dispatch({
      type: BOOK_SALE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_SALE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBookWithOrderList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOK_WITH_ORDERS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/books/orders`,
      config
    );

    dispatch({
      type: BOOK_WITH_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: BOOK_WITH_ORDERS_FAIL,
      payload: message,
    });
  }
};
