import React, { FC } from "react";
import {
  AzureAD,
  LoginType,
  AuthenticationState,
  IAzureADFunctionProps
} from "react-aad-msal";
import store from "components/App/store";
import { connect } from "react-redux";
import { IAppState } from "redux/reducers";
import { IAuthState } from "redux/types";
import { authProvider } from "redux/actions/msalActions";
import { RoutedContent } from "routes";
import Login from "components/auth/Login";

interface IStateProps {
  auth: IAuthState;
}

type IProps = IStateProps;

const AzureAuth: FC<IProps> = ({ auth: { isAuthenticated } }) => {
  const options = authProvider.getProviderOptions();
  options.loginType = LoginType.Popup;
  authProvider.setProviderOptions(options);

  return (
    <AzureAD provider={authProvider} reduxStore={store}>
      {({ accountInfo, authenticationState, error }: IAzureADFunctionProps) => {
        console.log(
          authenticationState === AuthenticationState.Unauthenticated
            ? "Unauthenticated"
            : "Authenticated"
        );
        const isInProgressMsal =
          authenticationState === AuthenticationState.InProgress;
        const isAuthenticatedMsal =
          authenticationState === AuthenticationState.Authenticated;
        const isUnauthenticatedMsal =
          authenticationState === AuthenticationState.Unauthenticated;

        return (
          <>
            {isAuthenticatedMsal || isAuthenticated ? (
              <RoutedContent />
            ) : (
              (isUnauthenticatedMsal || isInProgressMsal) && <Login />
            )}
            {/* {process.env.NODE_ENV === "development" && (
              <>
                <div>
                  <h2>Authenticated Values</h2>
                  <p>When logged in, this box will show your tokens and user info</p>
                  {accountInfo && (
                    <div style={{ wordWrap: "break-word" }}>
                      <p>
                        <span style={{ fontWeight: "bold" }}>ID Token:</span>
                        {accountInfo.jwtIdToken}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Username:</span>
                        {accountInfo.account.userName}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Access Token:</span>
                        {accountInfo.jwtAccessToken}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>Name:</span>
                        {accountInfo.account.name}
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <h2>Errors</h2>
                  <p>
                    If authentication fails, this box will have the errors that
                    occurred
                  </p>
                  {error && (
                    <div style={{ wordWrap: "break-word" }}>
                      <p>
                        <span style={{ fontWeight: "bold" }}>errorCode:</span>
                        {error.errorCode}
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>errorMessage:</span>
                        {error.errorMessage}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )} */}
          </>
        );
      }}
    </AzureAD>
  );
};

const mapStateToProps = (state: IAppState): IStateProps => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AzureAuth);
