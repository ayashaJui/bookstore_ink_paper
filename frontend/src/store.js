import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  bookAuthorListReducer,
  bookCreateReducers,
  bookDeleteReducer,
  bookDetailsReducer,
  bookListReducer,
  bookUpdateReducers,
  bookWithOrderReducers,
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
  AuthorCreateReducers,
  authorDeleteReducer,
  authorDetailsReducer,
  authorListReducer,
  authorUpdateReducers,
  favoriteAuthorListReducer,
} from "./reducers/authorReducers.js";

import {
  blogCategoyListReducer,
  blogCreateReducers,
  blogDeatilsReducer,
  blogDeleteReducer,
  blogLatestReducer,
  blogListMyReducer,
  blogListReducer,
  blogTagListReducer,
  blogUpdateIsHiddenReducer,
  blogUpdateReducers,
} from "./reducers/blogReducers.js";
import {
  userCreateReducers,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateIsAdminReducer,
  userUpdateProfileReducer,
  userUpdateReducers,
} from "./reducers/userReducers.js";
import {
  orderCreateReducers,
  orderCustomerListReducers,
  orderDeleteReducer,
  orderDetailsReducers,
  orderListMyReducers,
  orderListReducers,
} from "./reducers/orderReducers.js";

const reducers = combineReducers({
  cart: cartReducers,
  favorite: favoriteReducers,

  orderCreate: orderCreateReducers,
  orderDetails: orderDetailsReducers,
  userOrderList: orderListMyReducers,
  orderCustomerList: orderCustomerListReducers,
  orderList: orderListReducers,
  orderDelete: orderDeleteReducer,

  bookWithOrderList: bookWithOrderReducers,

  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
  genreList: genreListReducer,
  bookAuthorList: bookAuthorListReducer,
  formatList: formatListReducer,
  publisherList: publisherListReducer,
  latestReleaseList: latestReleaseListReducer,
  popularBookList: popularBookListReducer,
  featuredBookList: featuredBookListReducer,
  saleBookList: saleBookListReducer,
  bookCreate: bookCreateReducers,
  bookUpdate: bookUpdateReducers,
  bookDelete: bookDeleteReducer,

  authorList: authorListReducer,
  favoriteAuthorList: favoriteAuthorListReducer,
  authorDetails: authorDetailsReducer,
  authorCreate: AuthorCreateReducers,
  authorUpdate: authorUpdateReducers,
  authorDelete: authorDeleteReducer,

  blogList: blogListReducer,
  blogDetails: blogDeatilsReducer,
  blogLatest: blogLatestReducer,
  blogCategoryList: blogCategoyListReducer,
  blogTagList: blogTagListReducer,
  blogUpdateIsHidden: blogUpdateIsHiddenReducer,
  blogCreate: blogCreateReducers,
  blogUpdate: blogUpdateReducers,
  blogDelete: blogDeleteReducer,

  userBlogList: blogListMyReducer,

  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userUpdateIsAdmin: userUpdateIsAdminReducer,
  userCreate: userCreateReducers,
  userUpdate: userUpdateReducers,
  userDelete: userDeleteReducer,
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
