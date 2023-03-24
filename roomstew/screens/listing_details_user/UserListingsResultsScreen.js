import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingsResultsScreenComponent from "../../components/listing_details_screen_components/ListingsResultsScreenComponent";

const UserListingsResultsScreen = () => {
  return (
    <ListingsResultsScreenComponent
      searchOrSavedOrUser="user"
      navigateToScreenName="UserListingDetailsScreen"
      navigateToEditScreenName="UserListingUpdatePrefsScreen"
      isUserListing={true}
    />
  );
};

export default UserListingsResultsScreen;

const styles = StyleSheet.create({});
