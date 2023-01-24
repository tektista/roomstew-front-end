// import React, { useState } from "react";

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   SafeAreaView,
//   TextInput,
// } from "react-native";
// import AppButton from "./app/components/AppButton";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
// import MessagesScreen from "./app/components/MessagesScreen";
// import Screen from "./app/components/Screen";
// import ListItem from "./app/components/ListItem";
// import AccountScreen from "./app/components/AccountScreen";
// import AppTextInput from "./app/components/AppTextInput";
// import AppPicker from "./app/components/AppPicker";
// import AppText from "./app/components/AppText";

// import Icon from "./app/components/Icon";

// import LoginScreen from "./app/screens/LoginScreen";

// import ListingsScreen from "./app/components/ListingScreen";
// import ListingScreen from "./app/components/ListingScreen";

// export default function App() {
//   return <LoginScreen />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// RoomStew

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Screen from "./roomstew/components/Screen";
// import AppText from "./roomstew/components/AppText";
import Card from "./roomstew/components/Card";
import ListingScreen from "./roomstew/screens/ListingScreen";
import LoginScreen from "./roomstew/screens/LoginScreen";
import AccountScreen from "./roomstew/screens/AccountScreen";

export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "yellow",
  },
});
