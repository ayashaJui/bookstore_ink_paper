import {
  BOOK_AUTHOR_FAIL,
  BOOK_AUTHOR_REQUEST,
  BOOK_AUTHOR_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_FEATURED_FAIL,
  BOOK_FEATURED_REQUEST,
  BOOK_FEATURED_SUCCESS,
  BOOK_FORMAT_FAIL,
  BOOK_FORMAT_REQUEST,
  BOOK_FORMAT_SUCCESS,
  BOOK_GENRE_FAIL,
  BOOK_GENRE_REQUEST,
  BOOK_GENRE_SUCCESS,
  BOOK_LATEST_RELEASE_FAIL,
  BOOK_LATEST_RELEASE_REQUEST,
  BOOK_LATEST_RELEASE_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_POPULAR_FAIL,
  BOOK_POPULAR_REQUEST,
  BOOK_POPULAR_SUCCESS,
  BOOK_PUBLISHER_FAIL,
  BOOK_PUBLISHER_REQUEST,
  BOOK_PUBLISHER_SUCCESS,
  BOOK_SALE_FAIL,
  BOOK_SALE_REQUEST,
  BOOK_SALE_SUCCESS,
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
  publishers: [],
  latestReleases: [],
  popularBooks: [],
  featuredBooks: [],
  saleBooks: [],
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

export const publisherListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_PUBLISHER_REQUEST:
      return {
        loading: true,
        publishers: [],
      };
    case BOOK_PUBLISHER_SUCCESS:
      return {
        loading: false,
        publishers: payload,
      };
    case BOOK_PUBLISHER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const latestReleaseListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case BOOK_LATEST_RELEASE_REQUEST:
      return {
        loading: true,
        latestReleases: [],
      };
    case BOOK_LATEST_RELEASE_SUCCESS:
      return {
        loading: false,
        latestReleases: payload,
      };
    case BOOK_LATEST_RELEASE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const popularBookListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_POPULAR_REQUEST:
      return {
        loading: true,
        popularBooks: [],
      };
    case BOOK_POPULAR_SUCCESS:
      return {
        loading: false,
        popularBooks: payload,
      };
    case BOOK_POPULAR_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const featuredBookListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_FEATURED_REQUEST:
      return {
        loading: true,
        featuredBooks: [],
      };
    case BOOK_FEATURED_SUCCESS:
      return {
        loading: false,
        featuredBooks: payload,
      };
    case BOOK_FEATURED_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const saleBookListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_SALE_REQUEST:
      return {
        loading: true,
        saleBooks: [],
      };
    case BOOK_SALE_SUCCESS:
      return {
        loading: false,
        saleBooks: payload,
      };
    case BOOK_SALE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
