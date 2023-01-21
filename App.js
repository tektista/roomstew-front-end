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
import CardV2 from "./roomstew/components/CardV2";

import ListingScreen from "./roomstew/screens/ListingScreen";

export default function App() {
  return (
    <ListingScreen style={styles.screen}>
      <Card
        image={require("./roomstew/assets/apartment.jpg")}
        rent={300}
        title="Apartment with 3 bedrroms in lovely suburbs available"
        roomsAvailable={3}
        dateAvailable="01/01/2021"
        dateAdded="01/01/2021"
      ></Card>
    </ListingScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "yellow",
  },
});
