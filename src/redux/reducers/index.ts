import { combineReducers } from "redux";
import authReducer from "redux/reducers/authReducer";
import msalReducer from "redux/reducers/msalReducer";
import { IAuthState, IMsalState } from "redux/types";

export interface IAppState {
  auth: IAuthState;
  msal: IMsalState;
  //   currentLangData: langData[state.lang]
}

export default combineReducers<IAppState>({
  auth: authReducer,
  msal: msalReducer
});
