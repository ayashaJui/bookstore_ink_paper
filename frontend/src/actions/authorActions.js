import axios from "axios";

import {
  AUTHOR_CREATE_FAIL,
  AUTHOR_CREATE_REQUEST,
  AUTHOR_CREATE_RESET,
  AUTHOR_CREATE_SUCCESS,
  AUTHOR_DELETE_FAIL,
  AUTHOR_DELETE_REQUEST,
  AUTHOR_DELETE_RESET,
  AUTHOR_DELETE_SUCCESS,
  AUTHOR_DETAILS_FAIL,
  AUTHOR_DETAILS_REQUEST,
  AUTHOR_DETAILS_RESET,
  AUTHOR_DETAILS_SUCCESS,
  AUTHOR_LIST_FAIL,
  AUTHOR_LIST_REQUEST,
  AUTHOR_LIST_SUCCESS,
  AUTHOR_POPULAR_FAIL,
  AUTHOR_POPULAR_REQUEST,
  AUTHOR_POPULAR_SUCCESS,
  AUTHOR_UPDATE_FAIL,
  AUTHOR_UPDATE_REQUEST,
  AUTHOR_UPDATE_RESET,
  AUTHOR_UPDATE_SUCCESS,
} from "../constants/author";
import { logout } from "./userActions";

const authorUrl = `${
  process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:5000"
}/api/authors`;

export const getAllAuthors = () => async (dispatch) => {
  try {
    dispatch({
      type: AUTHOR_LIST_REQUEST,
    });

    const { data } = await axios.get(`${authorUrl}`);

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
      `${authorUrl}/popular`
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

export const getAuthorDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: AUTHOR_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`${authorUrl}/${id}`);

    dispatch({
      type: AUTHOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AUTHOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createAuthor = (author) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AUTHOR_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${authorUrl}`,
      author,
      config
    );

    dispatch({
      type: AUTHOR_CREATE_SUCCESS,
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
      type: AUTHOR_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateAuthor = (author) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AUTHOR_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${authorUrl}/${author.id}`,
      author,
      config
    );

    dispatch({
      type: AUTHOR_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: AUTHOR_DETAILS_SUCCESS,
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
      type: AUTHOR_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const deleteAuthor = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AUTHOR_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${authorUrl}/${id}`, config);

    dispatch({ type: AUTHOR_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: AUTHOR_DELETE_FAIL,
      payload: message,
    });
  }
};

export const authorClearSuccess = () => async (dispatch) => {
  dispatch({ type: AUTHOR_CREATE_RESET });
  dispatch({ type: AUTHOR_UPDATE_RESET });
  dispatch({ type: AUTHOR_DETAILS_RESET });
  dispatch({ type: AUTHOR_DELETE_RESET });
};
