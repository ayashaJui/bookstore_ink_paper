import { SNACKBAR_HIDE, SNACKBAR_SHOW } from "../constants/snackbar";

export const snackbarReducer = (
  state = { open: false, message: "", severity: "success" },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SNACKBAR_SHOW:
      return { open: true, message: payload.message, severity: payload.severity };
    case SNACKBAR_HIDE:
      return { ...state, open: false };
    default:
      return state;
  }
};
