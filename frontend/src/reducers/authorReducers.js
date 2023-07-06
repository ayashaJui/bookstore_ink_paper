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

export const authorListReducer = (state = { authors: [] }, action) => {
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

export const favoriteAuthorListReducer = (
  state = { favoriteAuthors: [] },
  action
) => {
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

export const authorDetailsReducer = (state = { author: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_DETAILS_REQUEST:
      return {
        loading: true,
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
    case AUTHOR_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const AuthorCreateReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_CREATE_REQUEST:
      return {
        loading: true,
      };
    case AUTHOR_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        author: payload,
      };
    case AUTHOR_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case AUTHOR_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const authorUpdateReducers = (state = { author: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case AUTHOR_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        author: payload,
      };
    case AUTHOR_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case AUTHOR_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const authorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHOR_DELETE_REQUEST:
      return { loading: true };
    case AUTHOR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case AUTHOR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case AUTHOR_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
