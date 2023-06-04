import {
  AUTHOR_DETAILS_FAIL,
  AUTHOR_DETAILS_REQUEST,
  AUTHOR_DETAILS_SUCCESS,
  AUTHOR_LIST_FAIL,
  AUTHOR_LIST_REQUEST,
  AUTHOR_LIST_SUCCESS,
  AUTHOR_POPULAR_FAIL,
  AUTHOR_POPULAR_REQUEST,
  AUTHOR_POPULAR_SUCCESS,
} from "../constants/author";

const initialState = {
  authors: [],
  favoriteAuthors: [],
  author: {},
  loading: true,
  error: [],
};

export const authorListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_LIST_REQUEST:
      return {
        loading: true,
        authors: [],
      };
    case AUTHOR_LIST_SUCCESS:
      return {
        loading: false,
        authors: payload,
      };
    case AUTHOR_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const favoriteAuthorListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_POPULAR_REQUEST:
      return {
        loading: true,
        favoriteAuthors: [],
      };
    case AUTHOR_POPULAR_SUCCESS:
      return {
        loading: false,
        favoriteAuthors: payload,
      };
    case AUTHOR_POPULAR_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const authorDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_DETAILS_REQUEST:
      return {
        loading: true,
        author: [],
      };
    case AUTHOR_DETAILS_SUCCESS:
      return {
        loading: false,
        author: payload,
      };
    case AUTHOR_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
