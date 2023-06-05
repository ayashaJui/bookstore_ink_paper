import {
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
} from "../constants/blog";

const initialState = {
  blogs: [],
  blog: {},
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

export const blogDeatilsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_DETAILS_REQUEST:
      return {
        loading: true,
        blog: {},
      };
    case BLOG_DETAILS_SUCCESS:
      return {
        loading: false,
        blog: payload,
      };
    case BLOG_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
