import {
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
} from "../constants/blog";

const initialState = {
  blogs: [],
  loading: true,
  error: [],
};

export const blogListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_LIST_REQUEST:
      return {
        loading: true,
        blogs: [],
      };
    case BLOG_LIST_SUCCESS:
      return {
        loading: false,
        blogs: payload,
      };
    case BLOG_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
