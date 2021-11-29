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
  SafeAreaView,
} from "react-native";
//Native Hooks
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <ViewImageScreen />
    
  );
}

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: "#fff",
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "gold",
//           width: 100,
//           height: 100,
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: "tomato",
//           width: 100,
//           height: 100,
//         }}
//       />
//     </View>
//   );
// }


// export default function App() {
//   const handlePress = () => {
//     console.log("pressed");
//   };

//   //Using device orientation with native hooks
//   const {landscape} = useDeviceOrientation();

//   let value = 1;

//   //Alert API
//   const alertMe = () => {
//     console.log(value);

//     Alert.alert("Alert Title", "Here is the message", [
//       {
//         text: "yes",
//         onPress: () => {
//           console.log("yes");
//           value++;
//           console.log(value);
//         },
//       },
//       {
//         text: "No",
//         onPress: () => {
//           console.log("no");
//           value--;
//           console.log(value);
//         },
//       },
//     ]);
//   };

//   //Prompts - iOS only
//   const promptMe = () => {
//     Alert.prompt("Prompt Title", "Prompt Message", (text) => console.log(text));
//   };

//   return (
//     <View style={styles.container}>
//       <Button color="purple" title="Click Button" onPress={alertMe} />

//       <View
//       style={{ backgroundColor: "dodgerblue", width: "100%", height: landscape ? "100%" : "30%" }}
//     ></View>
//     </View>
//   );
// }

// const margin = { margin: 10 };
// const boxStyle = { width: 200, height: 70, backgroundColor: "dodgerblue" };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
