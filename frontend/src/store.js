import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  bookAuthorListReducer,
  bookDetailsReducer,
  bookListReducer,
  featuredBookListReducer,
  formatListReducer,
  genreListReducer,
  latestReleaseListReducer,
  popularBookListReducer,
  publisherListReducer,
  saleBookListReducer,
} from "./reducers/bookReducers.js";
import { cartReducers } from "./reducers/cartReducers.js";
import { favoriteReducers } from "./reducers/favoriteReducers.js";
import {
  authorDetailsReducer,
  authorListReducer,
  favoriteAuthorListReducer,
} from "./reducers/authorReducers.js";

import {
  blogDeatilsReducer,
  blogListReducer,
} from "./reducers/blogReducers.js";

const reducers = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducers,
  favorite: favoriteReducers,
  genreList: genreListReducer,
  bookAuthorList: bookAuthorListReducer,
  formatList: formatListReducer,
  publisherList: publisherListReducer,
  latestReleaseList: latestReleaseListReducer,
  popularBookList: popularBookListReducer,
  featuredBookList: featuredBookListReducer,
  saleBookList: saleBookListReducer,
  authorList: authorListReducer,
  favoriteAuthorList: favoriteAuthorListReducer,
  authorDetails: authorDetailsReducer,
  blogList: blogListReducer,
  blogDetails: blogDeatilsReducer,
});

const cartFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const favoriteFromStorage = localStorage.getItem("favoriteItems")
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [];

const initialStates = {
  cart: {
    cartItems: cartFromStorage,
  },
  favorite: {
    favoriteItems: favoriteFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialStates,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
