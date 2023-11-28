import axios from "axios";
import {
  CONTACT_CREATE_FAIL,
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_RESET,
  CONTACT_CREATE_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
} from "../constants/contact";
import { logout } from "./userActions";

const contactUrl = `${
  process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:5000"
}/api/contact`;

export const createContact = (contactInfo) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${contactUrl}`, contactInfo, config);

    dispatch({
      type: CONTACT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: CONTACT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const getContactList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${contactUrl}`, config);

    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: CONTACT_LIST_FAIL,
      payload: message,
    });
  }
};

export const authorClearSuccess = () => async (dispatch) => {
  dispatch({ type: CONTACT_CREATE_RESET });
};
