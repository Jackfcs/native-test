import { StatusBar } from "expo-status-bar";
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
} from "react-native";

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
    Alert.prompt("Prompt Title", "Prompt Message", text => console.log(text));
  };
    
  

  return (
    <View style={styles.container}>
      <Button color="purple" title="Click Button" onPress={promptMe} />
      <StatusBar style="dark" />
    </View>
    // <View style={styles.container}>
    //   <Text numberOfLines={1} onPress={handlePress}>
    //     Open up App.js
    //   </Text>
    //   <TouchableOpacity>
    //     <Image
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     />
    //   </TouchableOpacity>
    //   <TouchableNativeFeedback >
    //     <View style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}>
    //     </View>
    //   </TouchableNativeFeedback>
    //   <StatusBar style="dark" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
