import {
  AUTHOR_LIST_FAIL,
  AUTHOR_LIST_REQUEST,
  AUTHOR_LIST_SUCCESS,
} from "../constants/author";

const initialState = {
  authors: [],
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
