import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ActionTypes } from "redux/types";
import Axios from "axios";
import setAuthToken from "utils/setAuthToken";
import { message } from "antd";

// Load User
export const loadUser = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  setAuthToken(localStorage.token);

  try {
    const res = await Axios.get("/api/auth");

    dispatch({
      type: ActionTypes.USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: ActionTypes.AUTH_ERROR, payload: err.response.data.msg });
  }
};

// Register User
export const register = (formData: any) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await Axios.post("/api/users", formData, config);

    dispatch({
      type: ActionTypes.REGISTER_SUCCESS,
      payload: res.data
    });

    loadUser()(dispatch);
  } catch (err) {
    dispatch({
      type: ActionTypes.REGISTER_FAIL,
      payload: err.response.data.msg
    });
  }
};

// Login User
export const login = (formData: any, _loginSuccess: any) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await Axios.post("/api/auth", formData, config);

    dispatch({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: res.data
    });
    message.success(_loginSuccess);

    loadUser()(dispatch);
  } catch (err) {
    dispatch({
      type: ActionTypes.LOGIN_FAIL,
      payload: err.response.data.msg
    });
  }
};

// Forgot Password
export const forgotPassword = (formData: any) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  setLoading()(dispatch);

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await Axios.post("/api/auth/forgotpassword", formData, config);
    dispatch({
      type: ActionTypes.FORGOT_PASSWORD,
      msg: res.data.data
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.FORGOT_FAIL,
      msg: err.response.data.msg
    });
  }
};

// Request Reset Password
export const resetRequest = (resetToken: any) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  setLoading()(dispatch);

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await Axios.get(
      `/api/auth/resetpassword`,
      {
        params: {
          resetToken
        }
      },
      // @ts-ignore
      config
    );

    dispatch({
      type: ActionTypes.RESET_PASSWORD,
      msg: res.data.msg
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.RESET_FAIL,
      msg: err.response.data.msg
    });
  }
};

// Reset Password
export const updatePassword = (formData: any) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  setLoading()(dispatch);

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await Axios.put(`/api/auth/updatepassword`, formData, config);

    dispatch({
      type: ActionTypes.RESET_SUCCESS,
      payload: res.data
    });

    loadUser()(dispatch);
  } catch (err) {
    dispatch({
      type: ActionTypes.RESET_FAIL,
      msg: err.response.data.msg
    });
  }
};

export const setLoading = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: ActionTypes.SET_LOADING });
};

// Logout
export const logout = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: ActionTypes.LOGOUT, payload: "Unauthorized" });
};

// Clear Errors
export const clearErrors = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: ActionTypes.CLEAR_ERRORS });
};

// Clear Message
export const clearMsg = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  dispatch({ type: ActionTypes.CLEAR_MSG });
};

// Login User
export const login2 = (formData: any, _loginSuccess: any) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    const { name, password } = formData;
    if (
      (name === "technostar" && password === "tsv5963") ||
      (name === "admin" && password === "tsv5963") ||
      (name === "admin" && password === "password123?")
    ) {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { token: "someToken" }
      });

      message.success(_loginSuccess);
      loadUser();
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    dispatch({
      type: ActionTypes.LOGIN_FAIL,
      payload: err.message
    });
  }
};

// Logout
export const logout2 = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) =>
  dispatch({ type: ActionTypes.LOGOUT, payload: "Unauthorized" });
