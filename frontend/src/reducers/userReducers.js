import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESET,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RESET,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/user";

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_LOGIN_RESET:
      return {};
    default:
      return state;
  }
};

export const userLogoutReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGOUT_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {};
    case USER_LOGOUT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const userProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    // case USER_LOGIN_RESET:
    //   return {};
    default:
      return state;
  }
};
