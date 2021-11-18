//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Button,
  Alert,
  StatusBar,
  Platform,
  SafeAreaView
} from "react-native";
import Child from "./Child";

export default function App() {
  const handlePress = () => {
    console.log("pressed");
  };

  let value = 1;

  const alertMe = () => {
    console.log(value);

    Alert.alert("Alert Title", "Here is the message", [
      {
        text: "yes",
        onPress: () => {
          console.log("yes");
          value++;
          console.log(value);
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("no");
          value--;
          console.log(value);
        },
      },
    ]);
  };

  //iOS only
  const promptMe = () => {
    Alert.prompt("Prompt Title", "Prompt Message", (text) => console.log(text));
  };

  return (
    <View style={styles.container}>
      <Button color="purple" title="Click Button" onPress={promptMe} />

      <Child />

      
    </View>
  );
}

const margin = { margin: 10 };
const boxStyle = { width: 200, height: 70, backgroundColor: "dodgerblue" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
