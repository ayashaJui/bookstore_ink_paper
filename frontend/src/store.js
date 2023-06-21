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
  blogCategoyListReducer,
  blogDeatilsReducer,
  blogLatestReducer,
  blogListMyReducer,
  blogListReducer,
  blogTagListReducer,
} from "./reducers/blogReducers.js";
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateIsAdminReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers.js";
import {
  orderCreateReducers,
  orderDetailsReducers,
  orderListMyReducers,
} from "./reducers/orderReducers.js";

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
  blogLatest: blogLatestReducer,
  blogCategoryList: blogCategoyListReducer,
  blogTagList: blogTagListReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userBlogList: blogListMyReducer,
  orderCreate: orderCreateReducers,
  orderDetails: orderDetailsReducers,
  userOrderList: orderListMyReducers,
  userList: userListReducer,
  userUpdateIsAdmin: userUpdateIsAdminReducer,
});

const cartFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const favoriteFromStorage = localStorage.getItem("favoriteItems")
  ? JSON.parse(localStorage.getItem("favoriteItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null;

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : null;

const initialStates = {
  cart: {
    cartItems: cartFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  favorite: {
    favoriteItems: favoriteFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialStates,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
