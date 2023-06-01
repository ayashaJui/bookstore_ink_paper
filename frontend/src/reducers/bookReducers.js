import {
  BOOK_AUTHOR_FAIL,
  BOOK_AUTHOR_REQUEST,
  BOOK_AUTHOR_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_FORMAT_FAIL,
  BOOK_FORMAT_REQUEST,
  BOOK_FORMAT_SUCCESS,
  BOOK_GENRE_FAIL,
  BOOK_GENRE_REQUEST,
  BOOK_GENRE_SUCCESS,
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
  genres: [],
  bookAuthors: [],
  formats: [],
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

export const genreListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_GENRE_REQUEST:
      return {
        loading: true,
        genres: [],
      };
    case BOOK_GENRE_SUCCESS:
      return {
        loading: false,
        genres: payload,
      };
    case BOOK_GENRE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const bookAuthorListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_AUTHOR_REQUEST:
      return {
        loading: true,
        bookAuthors: [],
      };
    case BOOK_AUTHOR_SUCCESS:
      return {
        loading: false,
        bookAuthors: payload,
      };
    case BOOK_AUTHOR_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const formatListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_FORMAT_REQUEST:
      return {
        loading: true,
        formats: [],
      };
    case BOOK_FORMAT_SUCCESS:
      return {
        loading: false,
        formats: payload,
      };
    case BOOK_FORMAT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
