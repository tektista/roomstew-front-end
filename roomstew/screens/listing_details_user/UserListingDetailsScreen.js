import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ListingDetailsScreenComponent from "../../components/listing_details_screen_components/ListingDetailsScreenComponent";

const UserListingDetailsScreen = () => {
  return (
    <ListingDetailsScreenComponent
      navigateToMapScreenName="UserListingMapScreen"
      navigateToRoomDetailsScreenName="UserListingRoomDetailsScreen"
      navigateToShowMoreDescScreenName={"UserListingShowMoreDescriptionScreen"}
      navigateToShowMoreDetailsScreenName={"UserListingShowMoreDetailsScreen"}
    />
  );
};

export default UserListingDetailsScreen;

const styles = StyleSheet.create({});
