import {
  BLOG_CATEGORIES_FAIL,
  BLOG_CATEGORIES_REQUEST,
  BLOG_CATEGORIES_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_RESET,
  BLOG_CREATE_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LATEST_FAIL,
  BLOG_LATEST_REQUEST,
  BLOG_LATEST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_MY_FAIL,
  BLOG_LIST_MY_REQUEST,
  BLOG_LIST_MY_RESET,
  BLOG_LIST_MY_SUCCESS,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_TAGS_FAIL,
  BLOG_TAGS_REQUEST,
  BLOG_TAGS_SUCCESS,
  BLOG_UPDATE_ISHIDDEN_FAIL,
  BLOG_UPDATE_ISHIDDEN_REQUEST,
  BLOG_UPDATE_ISHIDDEN_RESET,
  BLOG_UPDATE_ISHIDDEN_SUCCESS,
} from "../constants/blog";

const initialState = {
  blogs: [],
  blog: {},
  latest: [],
  categories: [],
  tags: [],
  myBlogs: [],
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

export const blogLatestReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_LATEST_REQUEST:
      return {
        loading: true,
        latest: {},
      };
    case BLOG_LATEST_SUCCESS:
      return {
        loading: false,
        latest: payload,
      };
    case BLOG_LATEST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogCategoyListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_CATEGORIES_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case BLOG_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: payload,
      };
    case BLOG_CATEGORIES_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogTagListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_TAGS_REQUEST:
      return {
        loading: true,
        tags: [],
      };
    case BLOG_TAGS_SUCCESS:
      return {
        loading: false,
        tags: payload,
      };
    case BLOG_TAGS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const blogListMyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_LIST_MY_REQUEST:
      return {
        loading: true,
        myBlogs: [],
      };
    case BLOG_LIST_MY_SUCCESS:
      return {
        loading: false,
        myBlogs: payload,
      };
    case BLOG_LIST_MY_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BLOG_LIST_MY_RESET:
      return {
        myBlogs: [],
      };
    default:
      return state;
  }
};

export const blogUpdateIsHiddenReducer = (state = { blog: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_UPDATE_ISHIDDEN_REQUEST:
      return {
        loading: true,
      };
    case BLOG_UPDATE_ISHIDDEN_SUCCESS:
      return {
        loading: false,
        blog: payload,
        success: true,
      };
    case BLOG_UPDATE_ISHIDDEN_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BLOG_UPDATE_ISHIDDEN_RESET:
      return {};
    default:
      return state;
  }
};

export const blogCreateReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BLOG_CREATE_REQUEST:
      return {
        loading: true,
      };
    case BLOG_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        blog: payload,
      };
    case BLOG_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BLOG_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
