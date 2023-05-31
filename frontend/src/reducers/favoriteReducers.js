import {
  ADD_ITEM_TO_FAVORITE,
  REMOVE_ITEM_FROM_FAVORITE,
} from "../constants/favorite";

const initialState = {
  favoriteItems: [],
};

export const favoriteReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM_TO_FAVORITE:
      const item = payload;

      const existItem = state.favoriteItems.find((x) => x.book === item.book);

      if (existItem) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((x) =>
            x.book === existItem.book ? item : x
          ),
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item],
        };
      }
    case REMOVE_ITEM_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter((x) => x.book !== payload),
      };
    default:
      return state;
  }
};
