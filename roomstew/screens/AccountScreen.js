import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AccuntScreenComponent from "../components/navigation_screen_components/AccountScreenComponent";

const AccountScreen = () => {
  return (
    <AccuntScreenComponent
      navigateToUserListingsName="UserListingsResultsScreen"
      navigateToUserSavedListingsScreenName="SavedListingsResultsScreen"
    />
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
