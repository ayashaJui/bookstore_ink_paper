import {
  ADD_ITEM_TO_CART,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_ITEM_FROM_CART,
} from "../constants/cart";

const initialState = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: {},
};

export const cartReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM_TO_CART:
      const item = payload;

      const existItem = state.cartItems.find((x) => x.book === item.book);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.book === existItem.book ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.book !== payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };
    default:
      return state;
  }
};
