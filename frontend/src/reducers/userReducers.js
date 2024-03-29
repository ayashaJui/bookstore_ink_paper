import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_UPDATE_ISADMIN_REQUEST,
  USER_UPDATE_ISADMIN_SUCCESS,
  USER_UPDATE_ISADMIN_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_UPDATE_ISADMIN_RESET,
  USER_CREATE_RESET,
  USER_UPDATE_RESET,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_RESET,
  USER_UPDATE_ISDELETED_REQUEST,
  USER_UPDATE_ISDELETED_SUCCESS,
  USER_UPDATE_ISDELETED_FAIL,
  USER_UPDATE_ISDELETED_RESET,
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
    case USER_LOGOUT:
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
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: payload,
      };
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = { userInfo: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
        success: true,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
      };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: payload,
      };
    case USER_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const userUpdateIsAdminReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_ISADMIN_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_ISADMIN_SUCCESS:
      return {
        loading: false,
        user: payload,
        success: true,
      };
    case USER_UPDATE_ISADMIN_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_UPDATE_ISADMIN_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdateIsDeletedReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_ISDELETED_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_ISDELETED_SUCCESS:
      return {
        loading: false,
        user: payload,
        success: true,
      };
    case USER_UPDATE_ISDELETED_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_UPDATE_ISDELETED_RESET:
      return {};
    default:
      return state;
  }
};

export const userCreateReducers = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case USER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        user: payload,
      };
    case USER_CREATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdateReducers = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        user: payload,
      };
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case USER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
