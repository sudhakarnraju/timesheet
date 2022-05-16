import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { authenticate } from "../controller/LoginController";
import { RouteProp } from "@react-navigation/native";
import { useEffect } from "react";
import { getTimesheet, getTimesheets } from "../controller/TimesheetController";

export default function TimesheetEditView({ route }) {
  const [timesheet, setTimesheet] = useState();
  const timesheetId = route?.params?.timesheetId;
  console.log("Editing timesheet", timesheet);
  useEffect(() => {
    const api = async () => {
      //const loginId = "test";
      const ts = await getTimesheet(timesheetId);
      if (!ts.error) {
        console.log(ts, " from controller");
        setTimesheet(ts);
      } else {
        console.log(ts.error);
      }
    };
    try {
      timesheetId && api();
    } catch (ex) {
      console.error(ex);
    }
  }, [timesheetId]);
  console.log({ timesheet });
  if (!timesheet) return null;
  return (
    <View style={styles.container}>
      <Text>{timesheet ? "Edit Timesheet" : "New Timesheet"}</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter your hours"
        defaultValue={timesheet.hours}
        onChangeText={(text) => setTimesheet({ ...timesheet, hours: text })}
      />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 1,
  },
});
