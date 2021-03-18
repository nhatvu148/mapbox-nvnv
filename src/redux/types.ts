import { AuthenticationState } from "react-aad-msal";

export enum ActionTypes {
  USER_LOADED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  RESET_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  FORGOT_FAIL,
  RESET_FAIL,
  CLEAR_MSG
}

// Auth:
export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
  error: any;
  msg: any;
}
export type TAuthAction =
  | { type: ActionTypes.USER_LOADED; payload: any }
  | { type: ActionTypes.REGISTER_SUCCESS; payload: any }
  | { type: ActionTypes.LOGIN_SUCCESS; payload: any }
  | { type: ActionTypes.RESET_SUCCESS; payload: any }
  | { type: ActionTypes.REGISTER_FAIL; payload: any }
  | { type: ActionTypes.AUTH_ERROR; payload: any }
  | { type: ActionTypes.LOGIN_FAIL; payload: any }
  | { type: ActionTypes.LOGOUT; payload: any }
  | { type: ActionTypes.CLEAR_ERRORS; payload: any }
  | { type: ActionTypes.SET_LOADING; payload: boolean }
  | { type: ActionTypes.FORGOT_PASSWORD; msg: any }
  | { type: ActionTypes.RESET_PASSWORD; msg: any }
  | { type: ActionTypes.FORGOT_FAIL; msg: any }
  | { type: ActionTypes.RESET_FAIL; msg: any }
  | { type: ActionTypes.CLEAR_MSG; msg: any; loading: boolean };

// MSAL:
export interface IMsalState {
  initializing: boolean;
  initialized: boolean;
  idToken: string;
  accessToken: string;
  state: AuthenticationState;
}
