import axios from "axios";

import {
  BLOG_CATEGORIES_FAIL,
  BLOG_CATEGORIES_REQUEST,
  BLOG_CATEGORIES_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_RESET,
  BLOG_CREATE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_RESET,
  BLOG_DELETE_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_RESET,
  BLOG_DETAILS_SUCCESS,
  BLOG_LATEST_FAIL,
  BLOG_LATEST_REQUEST,
  BLOG_LATEST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_MY_FAIL,
  BLOG_LIST_MY_REQUEST,
  BLOG_LIST_MY_SUCCESS,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_TAGS_FAIL,
  BLOG_TAGS_REQUEST,
  BLOG_TAGS_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_ISHIDDEN_FAIL,
  BLOG_UPDATE_ISHIDDEN_REQUEST,
  BLOG_UPDATE_ISHIDDEN_RESET,
  BLOG_UPDATE_ISHIDDEN_SUCCESS,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_RESET,
  BLOG_UPDATE_SUCCESS,
} from "../constants/blog";
import { logout } from "./userActions";

export const getAllBlogs =
  (queryParams = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: BLOG_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `http://localhost:5000/api/blogs?${queryParams}`
      );

      dispatch({
        type: BLOG_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BLOG_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getBlogById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`);

    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLatestBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_LATEST_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/blogs?sort=latest`
    );

    dispatch({
      type: BLOG_LATEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_LATEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllBlogCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_CATEGORIES_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/blogs/categories`
    );

    dispatch({
      type: BLOG_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllBlogTags = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_TAGS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/blogs/tags`);

    dispatch({
      type: BLOG_TAGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOG_TAGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyBlogList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_LIST_MY_REQUEST,
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
      `http://localhost:5000/api/blogs/myblogs`,
      config
    );

    dispatch({
      type: BLOG_LIST_MY_SUCCESS,
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
      type: BLOG_LIST_MY_FAIL,
      payload: message,
    });
  }
};

export const updateIsHidden = (id, blog) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_UPDATE_ISHIDDEN_REQUEST,
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
      `http://localhost:5000/api/blogs/${id}/isHidden`,
      blog,
      config
    );

    dispatch({
      type: BLOG_UPDATE_ISHIDDEN_SUCCESS,
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
      type: BLOG_UPDATE_ISHIDDEN_FAIL,
      payload: message,
    });
  }
};

export const createBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_CREATE_REQUEST,
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
      `http://localhost:5000/api/blogs`,
      blog,
      config
    );

    dispatch({
      type: BLOG_CREATE_SUCCESS,
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
      type: BLOG_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateBlog = (blog) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_UPDATE_REQUEST,
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
      `http://localhost:5000/api/blogs/${blog.id}`,
      blog,
      config
    );

    dispatch({
      type: BLOG_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: BLOG_DETAILS_SUCCESS,
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
      type: BLOG_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const deleteBlog = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BLOG_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`http://localhost:5000/api/blogs/${id}`, config);

    dispatch({ type: BLOG_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BLOG_DELETE_FAIL,
      payload: message,
    });
  }
};

export const blogClearSuccess = () => async (dispatch) => {
  dispatch({ type: BLOG_UPDATE_ISHIDDEN_RESET });
  dispatch({ type: BLOG_CREATE_RESET });
  dispatch({ type: BLOG_UPDATE_RESET });
  dispatch({ type: BLOG_DELETE_RESET });
  dispatch({ type: BLOG_DETAILS_RESET });

  // document.location.href = '/login'
};
