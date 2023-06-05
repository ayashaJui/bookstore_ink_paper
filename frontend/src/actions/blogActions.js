import axios from "axios";

import {
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
} from "../constants/blog";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: BLOG_LIST_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:5000/api/blogs`);

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
