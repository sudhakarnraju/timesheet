import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { authenticate } from "../controller/LoginController";
export default function LoginView({ navigation }) {
  const [state, setState] = useState({
    loginId: "",
    password: "",
    error: "",
  });
  const onLoginIdChange = (text: string) => {
    setState({ loginId: text, password: state.password, error: "" });
  };
  const onPasswordChange = (text: string) => {
    setState({ loginId: state.loginId, password: text, error: "" });
  };
  const onLoginPress = async () => {
    console.log(state);
    const { loginId, password } = state;
    if (loginId.trim().length === 0 || password.trim().length === 0) {
      setState({ ...state, error: "Login ID and Password Required" });
      return;
    }
    try {
      const result = await authenticate(loginId, password);
      if (result.error) {
        setState({ ...state, error: result.error });
      } else setState({ ...state, error: "Success" });
      navigation.navigate("dashboard", { loginId });
    } catch (err: any) {
      setState({ ...state, error: err.error });
    }
  };
  console.log(state);
  return (
    <View style={styles.container}>
      <Text>Login to Timesheet Application</Text>
      {state.error?.length ? <Text>{state.error}</Text> : null}

      <TextInput
        style={{ height: 40 }}
        placeholder="Login Id"
        defaultValue={state.loginId}
        onChangeText={onLoginIdChange}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Your password"
        defaultValue={state.password}
        onChangeText={onPasswordChange}
      />
      <View style={{ height: 40, width: 100 }}>
        <Button
          onPress={onLoginPress}
          title="Login"
          disabled={!(state.loginId.length && state.password.length)}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
