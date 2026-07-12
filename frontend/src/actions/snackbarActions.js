import { SNACKBAR_HIDE, SNACKBAR_SHOW } from "../constants/snackbar";

export const showSnackbar = (message, severity = "success") => ({
  type: SNACKBAR_SHOW,
  payload: { message, severity },
});

export const hideSnackbar = () => ({ type: SNACKBAR_HIDE });
