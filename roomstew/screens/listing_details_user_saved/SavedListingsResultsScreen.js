import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingsResultsScreenComponent from "../../components/listing_details_screen_components/ListingsResultsScreenComponent";

const SavedListingsResultsScreen = () => {
  return (
    <ListingsResultsScreenComponent
      searchOrSavedOrUser="saved"
      navigateToScreenName="SavedListingDetailsScreen"
    />
  );
};

export default SavedListingsResultsScreen;

const styles = StyleSheet.create({});
