import {
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from "../constants/book";

const initialState = {
  books: [
    {
      author: [],
    },
  ],
  book: {
    reviews: [],
    author: [],
    series: [],
  },
  loading: true,
  error: [],
};

export const bookListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_LIST_REQUEST:
      return {
        loading: true,
        books: [],
      };
    case BOOK_LIST_SUCCESS:
      return {
        loading: false,
        books: payload,
      };
    case BOOK_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const bookDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_DETAILS_REQUEST:
      return {
        loading: true,
        book: {},
      };
    case BOOK_DETAILS_SUCCESS:
      return {
        loading: false,
        book: payload,
      };
    case BOOK_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
