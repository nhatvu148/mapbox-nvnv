import React, { FC, useEffect, useRef } from "react";
// import { RouteComponentProps } from "react-router-dom";
import { AzureAD, IAzureADFunctionProps } from "react-aad-msal";
import store from "components/App/store";
import { authProvider } from "redux/actions/msalActions";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { login2, clearErrors, clearMsg } from "redux/actions/authActions";
import { IAppState } from "redux/reducers";
import { ActionTypes, IAuthState } from "redux/types";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, Card, message, Divider } from "antd";
import Microsoft from "assets/images/microsoft.png";

interface IStateProps {
  auth: IAuthState;
}

interface IDispatchProps {
  clearErrors: () => (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
  ) => {
    type: ActionTypes;
  };
  clearMsg: () => (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
  ) => {
    type: ActionTypes;
  };
  login2: (
    formData: any,
    _loginSuccess: any
  ) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => Promise<void>;
}

// type IProps = IStateProps & IDispatchProps & RouteComponentProps<any>;
type IProps = IStateProps & IDispatchProps;

const Login: FC<IProps> = ({
  auth: { error, isAuthenticated },
  login2,
  clearErrors,
  clearMsg,
  ...props
}) => {
  const usernameRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    // if (isAuthenticated) {
    //   props.history.push("/");
    // }

    if (error === "Invalid Credentials") {
      message.error("Invalid Credentials");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const onFinish = (values: any) => {
    login2(
      {
        name: values.username,
        password: values.password
      },
      "LOGIN SUCCESSFUL!"
    );
  };

  const firstKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passwordRef.current.focus();
    }
  };

  return (
    <AzureAD provider={authProvider} reduxStore={store}>
      {({ login }: IAzureADFunctionProps) => {
        return (
          <Card
            style={{
              margin: "auto",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "30px",
              borderColor: "#FFF",
              borderWidth: "5px",
              padding: "30px 5px",
              textAlign: "center",
              width: "400px",
              opacity: 0.9
            }}
            className="responsive-card"
            bordered={true}
          >
            <div className="logo">
              <h2>
                <a
                  href="https://github.com/nhatvu148"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="/"
                    width={80}
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  />
                </a>
              </h2>
            </div>
            <h1
              style={{
                color: "#666",
                marginBottom: "30px",
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: 20
              }}
            >
              Nhat Vu's Web App
            </h1>
            <Form name="normal_login" className="login-form" onFinish={onFinish}>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                <Input
                  ref={usernameRef}
                  onKeyDown={firstKeyDown}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={"Username"}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]}
              >
                <Input.Password
                  ref={passwordRef}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder={"Password"}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {"Log in"}
                </Button>
                <Divider>{"or"}</Divider>
              </Form.Item>
            </Form>
            <Button onClick={login} style={{ borderColor: "rgb(89, 89, 89)" }}>
              <img
                src={Microsoft}
                alt=""
                width="20px"
                style={{
                  marginRight: "10px",
                  paddingBottom: "3px"
                }}
              />
              <span style={{ fontWeight: "bold" }}>Log in with Microsoft</span>
            </Button>
          </Card>
        );
      }}
    </AzureAD>
  );
};

const mapStateToProps = (state: IAppState): IStateProps => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  return {
    ...bindActionCreators(
      {
        login2,
        clearErrors,
        clearMsg
      },
      dispatch
    )
  };
};
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Login);
