import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  bookDetailsReducer,
  bookListReducer,
} from "./reducers/bookReducers.js";

const reducers = combineReducers({
  bookList: bookListReducer,
  bookDetails: bookDetailsReducer,
});

const initialStates = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialStates,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
