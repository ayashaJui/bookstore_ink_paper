import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CUSTOMER_LIST_FAIL,
  ORDER_CUSTOMER_LIST_REQUEST,
  ORDER_CUSTOMER_LIST_RESET,
  ORDER_CUSTOMER_LIST_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_RESET,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/order";

export const orderCreateReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducers = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const orderListMyReducers = (state = { orders: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ORDER_LIST_MY_RESET:
      return {
        orders: [],
      };
    default:
      return state;
  }
};

export const orderCustomerListReducers = (
  state = { customerOrders: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CUSTOMER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CUSTOMER_LIST_SUCCESS:
      return {
        loading: false,
        customerOrders: payload,
      };
    case ORDER_CUSTOMER_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ORDER_CUSTOMER_LIST_RESET:
      return {
        customerOrders: [],
      };
    default:
      return state;
  }
};

export const orderListReducers = (state = { orders: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
