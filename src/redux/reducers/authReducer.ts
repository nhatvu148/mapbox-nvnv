import { ActionTypes, IAuthState, TAuthAction } from "redux/types";

const initialState: IAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
  msg: null
};

export default (state = initialState, action: TAuthAction) => {
  switch (action.type) {
    case ActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case ActionTypes.REGISTER_SUCCESS:
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.RESET_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        msg: null,
        error: null
      };
    case ActionTypes.REGISTER_FAIL:
    case ActionTypes.AUTH_ERROR:
    case ActionTypes.LOGIN_FAIL:
    case ActionTypes.LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("chat_messages");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.FORGOT_PASSWORD:
    case ActionTypes.RESET_PASSWORD:
      return { ...state, msg: action.msg };

    case ActionTypes.FORGOT_FAIL:
    case ActionTypes.RESET_FAIL:
      return { ...state, error: action.msg };

    case ActionTypes.CLEAR_MSG:
      return { ...state, msg: null, loading: false };

    default:
      return state;
  }
};
