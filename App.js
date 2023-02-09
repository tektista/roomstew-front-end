// RoomStew
// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// import Screen from "./roomstew/components/Screen";
// import Card from "./roomstew/components/Card";
// import ListingScreen from "./roomstew/screens/ListingScreen";
// import LoginScreen from "./roomstew/screens/LoginScreen";
// import AccountScreen from "./roomstew/screens/AccountScreen";
// import AppForm from "./roomstew/components/forms/AppForm";
// import AppFormField from "./roomstew/components/forms/AppFormField";
// import CreateListingScreen from "./roomstew/screens/CreateListingScreen";

// import AppCheckboxInput from "./roomstew/components/AppCheckboxInput";
// import AppFormCheckbox from "./roomstew/components/forms/AppFormCheckbox";

// export default function App() {
//   return <ListingScreen />;
// }

// const styles = StyleSheet.create({
//   screen: {
//     backgroundColor: "yellow",
//   },
// });

// Test stack navigator

import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppNavigator from "./roomstew/navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
