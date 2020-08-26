import React, { PureComponent } from "react";

import { Text, View } from "react-native";

import styles from "./styles";
interface LoginProps {
  loading?: boolean,
  error?: boolean,
  onLogin: () =>{}
}
class Login extends PureComponent<LoginProps> {
	render() {
		const { onLogin, loading, error } = this.props;
		
		return (
      <View style={styles.main} testID="login-layout">
						{!!error ? <Text style={styles.error}>{error}</Text> : null}
            <Text>OK</Text>
      </View>
		)
	}
}

export default Login;