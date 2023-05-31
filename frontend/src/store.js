import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  bookDetailsReducer,
  bookListReducer,
} from "./reducers/bookReducers.js";
import { cartReducers } from "./reducers/cartReducers.js";
import { favoriteReducers } from "./reducers/favoriteReducers.js";

const reducers = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  cart: cartReducers,
  favorite: favoriteReducers,
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
