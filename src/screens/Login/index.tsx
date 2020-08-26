import React, { PureComponent } from "react";
import { Alert } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import * as AppAuth from "expo-app-auth";

import config from "@config";
import Layout from "./Layout";

export default class Login extends PureComponent {
  state = { loading: false };
  handleLogin = async () => {
    console.log("login.press");
    try {
      const authResult = await AppAuth.authAsync(config.auth);
      const { accessToken, refreshToken } = authResult;
    } catch (e) {
      console.error("Login failure.", e.message);
    }

    await new Promise((resolve) => this.setState({ loading:false }, resolve));
  };
	render() {
		return <Layout onLogin={this.handleLogin} loading={this.state.loading} />;
	}

}