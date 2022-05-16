import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginView from "./views/LoginView";
import { NavigationContainer } from "@react-navigation/native";
import DashboardView from "./views/DashboardView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TimesheetEditView from "./views/TimesheetEditView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginView}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="dashboard"
          component={DashboardView}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="timesheetEdit"
          component={TimesheetEditView}
          options={{ title: "Edit Timesheet" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
