import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingDetailsScreenComponent from "../../components/listing_details_screen_components/ListingDetailsScreenComponent";

const ListingDetailsScreen = () => {
  return (
    <ListingDetailsScreenComponent
      navigateToMapScreenName="ListingMapScreen"
      navigateToRoomDetailsScreenName="ListingRoomDetailsScreen"
      navigateToShowMoreDescScreenName="ListingShowMoreDescriptionScreen"
      navigateToShowMoreDetailsScreenName="ListingShowMoreDetailsScreen"
    />
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({});
