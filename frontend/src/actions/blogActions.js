import axios from "axios";

import {
  BLOG_CATEGORIES_FAIL,
  BLOG_CATEGORIES_REQUEST,
  BLOG_CATEGORIES_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LATEST_FAIL,
  BLOG_LATEST_REQUEST,
  BLOG_LATEST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_TAGS_FAIL,
  BLOG_TAGS_REQUEST,
  BLOG_TAGS_SUCCESS,
} from "../constants/blog";

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
