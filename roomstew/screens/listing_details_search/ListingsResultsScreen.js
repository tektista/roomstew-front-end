import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingsScreenComponent from "../../components/listing_details_screen_components/ListingsScreenComponent";

const ListingsResultsScreen = () => {
  return (
    <ListingsScreenComponent
      searchOrSavedOrUser="search"
      navigateToScreenName="ListingDetailsScreen"
    />
  );
};

export default ListingsResultsScreen;

const styles = StyleSheet.create({});
