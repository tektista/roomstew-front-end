import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingsResultsScreenComponent from "../../components/listing_details_screen_components/ListingsResultsScreenComponent";

const ListingsResultsScreen = () => {
  return (
    <ListingsResultsScreenComponent
      searchOrSavedOrUser="search"
      navigateToScreenName="ListingDetailsScreen"
    />
  );
};

export default ListingsResultsScreen;

const styles = StyleSheet.create({});
