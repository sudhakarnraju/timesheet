import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { authenticate } from "../controller/LoginController";
import { RouteProp } from "@react-navigation/native";
import TimesheetListView from "./TimeSheetListView";

export default function DashboardView({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Your Dashboard</Text>
      <Button
        title="Create New Timesheet"
        onPress={() => navigation.navigate("timesheetEdit")}
      />

      <TimesheetListView
        loginId={route?.params?.loginId}
        navigation={navigation}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
