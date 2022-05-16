import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { authenticate } from "../controller/LoginController";
import { RouteProp } from "@react-navigation/native";
import { useEffect } from "react";
import { getTimesheets } from "../controller/TimesheetController";

export default function TimesheetListView({ loginId, navigation }) {
  const [timesheets, setTimesheets] = useState([]);
  useEffect(() => {
    const api = async () => {
      //const loginId = "test";
      const ts = await getTimesheets(loginId);
      console.log(ts, " from controller");
      setTimesheets(ts);
    };
    api();
  }, []);

  console.log("Timesheets", timesheets);
  const onTimesheetEntryPress = (timesheetId) => {
    console.log("Opening:", timesheetId);
    navigation.navigate("timesheetEdit", { timesheetId });
  };
  return (
    <View style={styles.container}>
      <Text>Your Recent Timesheets</Text>
      {timesheets.length ? (
        <FlatList
          data={timesheets}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                onTimesheetEntryPress(item.timesheetId);
              }}
              underlayColor="white"
            >
              <View style={styles.item}>
                <Text>{item.weekDate}</Text>
                <Text>{item.hours}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      ) : (
        <Text>
          You do not have active timesheets. You can create one by clicking New
          Timesheet
        </Text>
      )}
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
