import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingDetailsScreenComponent from "../../components/listing_details_screen_components/ListingDetailsScreenComponent";

const SavedListingDetailsScreen = () => {
  return (
    <ListingDetailsScreenComponent
      navigateToMapScreenName="SavedListingMapScreen"
      navigateToRoomDetailsScreenName="SavedListingRoomDetailsScreen"
      navigateToShowMoreDescScreenName="SavedListingShowMoreDescriptionScreen"
      navigateToShowMoreDetailsScreenName="SavedListingShowMoreDetailsScreen"
    />
  );
};

export default SavedListingDetailsScreen;

const styles = StyleSheet.create({});
