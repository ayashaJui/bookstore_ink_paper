import axios from "axios";

import {
  BOOK_AUTHOR_FAIL,
  BOOK_AUTHOR_REQUEST,
  BOOK_AUTHOR_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_FORMAT_FAIL,
  BOOK_FORMAT_REQUEST,
  BOOK_FORMAT_SUCCESS,
  BOOK_GENRE_FAIL,
  BOOK_GENRE_REQUEST,
  BOOK_GENRE_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from "../constants/book";

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
