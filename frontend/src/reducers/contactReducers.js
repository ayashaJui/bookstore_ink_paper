import {
  CONTACT_CREATE_FAIL,
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_RESET,
  CONTACT_CREATE_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_RESET,
  CONTACT_LIST_SUCCESS,
} from "../constants/contact";

export const contactCreateReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTACT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case CONTACT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        contactInfo: payload,
      };
    case CONTACT_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CONTACT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const contactListReducers = (state = { contacts: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTACT_LIST_REQUEST:
      return {
        loading: true,
      };
    case CONTACT_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        contacts: payload,
      };
    case CONTACT_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CONTACT_LIST_RESET:
      return {};
    default:
      return state;
  }
};
