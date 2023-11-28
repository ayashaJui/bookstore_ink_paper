import {
  BOOK_AUTHOR_FAIL,
  BOOK_AUTHOR_REQUEST,
  BOOK_AUTHOR_SUCCESS,
  BOOK_CREATE_FAIL,
  BOOK_CREATE_RATINGS_FAIL,
  BOOK_CREATE_RATINGS_REQUEST,
  BOOK_CREATE_RATINGS_SUCCESS,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_RESET,
  BOOK_CREATE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_DELETE_RATINGS_FAIL,
  BOOK_DELETE_RATINGS_REQUEST,
  BOOK_DELETE_RATINGS_SUCCESS,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_RESET,
  BOOK_DELETE_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_RESET,
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
  BOOK_RATINGS_DISTRIBUTION_FAIL,
  BOOK_RATINGS_DISTRIBUTION_REQUEST,
  BOOK_RATINGS_DISTRIBUTION_SUCCESS,
  BOOK_RATINGS_FAIL,
  BOOK_RATINGS_REQUEST,
  BOOK_RATINGS_SUCCESS,
  BOOK_REVIEW_LIST_FAIL,
  BOOK_REVIEW_LIST_REQUEST,
  BOOK_REVIEW_LIST_SUCCESS,
  BOOK_SALE_FAIL,
  BOOK_SALE_REQUEST,
  BOOK_SALE_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_RESET,
  BOOK_UPDATE_SUCCESS,
  BOOK_WITH_ORDERS_FAIL,
  BOOK_WITH_ORDERS_REQUEST,
  BOOK_WITH_ORDERS_RESET,
  BOOK_WITH_ORDERS_SUCCESS,
} from "../constants/book";

export const bookListReducer = (state = { books: [] }, action) => {
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

export const bookDetailsReducer = (state = { book: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_DETAILS_REQUEST:
      return {
        loading: true,
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
    case BOOK_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const genreListReducer = (state = { genres: [] }, action) => {
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

export const bookAuthorListReducer = (state = { bookAuthors: [] }, action) => {
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

export const formatListReducer = (state = { formats: [] }, action) => {
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

export const publisherListReducer = (state = { publishers: [] }, action) => {
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

export const latestReleaseListReducer = (
  state = { latestReleases: [] },
  action
) => {
  const { type, payload } = action;

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

export const popularBookListReducer = (
  state = { popularBooks: [] },
  action
) => {
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

export const featuredBookListReducer = (
  state = { featuredBooks: [] },
  action
) => {
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

export const saleBookListReducer = (state = { saleBooks: [] }, action) => {
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

export const bookWithOrderReducers = (
  state = { bookWithOrder: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_WITH_ORDERS_REQUEST:
      return {
        loading: true,
      };
    case BOOK_WITH_ORDERS_SUCCESS:
      return {
        loading: false,
        bookWithOrder: payload,
      };
    case BOOK_WITH_ORDERS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BOOK_WITH_ORDERS_RESET:
      return {
        bookWithOrder: [],
      };
    default:
      return state;
  }
};

export const bookCreateReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_CREATE_REQUEST:
      return {
        loading: true,
      };
    case BOOK_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        book: payload,
      };
    case BOOK_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BOOK_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookUpdateReducers = (state = { book: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case BOOK_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        book: payload,
      };
    case BOOK_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case BOOK_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_DELETE_REQUEST:
      return { loading: true };
    case BOOK_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BOOK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case BOOK_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookRatingsReducer = (state = { ratings: {} }, action) => {
  switch (action.type) {
    case BOOK_RATINGS_REQUEST:
      return { loading: true };
    case BOOK_RATINGS_SUCCESS:
      return { loading: false, success: true, ratings: action.payload };
    case BOOK_RATINGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookRatingCreateReducers = (
  state = { book: { reviews: [] } },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_CREATE_RATINGS_REQUEST:
      return {
        loading: true,
      };
    case BOOK_CREATE_RATINGS_SUCCESS:
      return {
        loading: false,
        success: true,
        book: action.payload,
      };
    case BOOK_CREATE_RATINGS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const bookRatingDeleteReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case BOOK_DELETE_RATINGS_REQUEST:
      return {
        loading: true,
      };
    case BOOK_DELETE_RATINGS_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case BOOK_DELETE_RATINGS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const bookRatingsDistributionReducer = (
  state = { distribution: {} },
  action
) => {
  switch (action.type) {
    case BOOK_RATINGS_DISTRIBUTION_REQUEST:
      return { loading: true };
    case BOOK_RATINGS_DISTRIBUTION_SUCCESS:
      return { loading: false, success: true, distribution: action.payload };
    case BOOK_RATINGS_DISTRIBUTION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const bookReviewListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case BOOK_REVIEW_LIST_REQUEST:
      return { loading: true };
    case BOOK_REVIEW_LIST_SUCCESS:
      return { loading: false, success: true, reviews: action.payload };
    case BOOK_REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
