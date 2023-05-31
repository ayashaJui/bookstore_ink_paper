import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constants/cart";

const initialState = {
  cartItems: [],
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
    default:
      return state;
  }
};
