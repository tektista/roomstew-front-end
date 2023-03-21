import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ListingMap from "../../components/ListingMap";

const ListingDetailsMapScreen = ({ route }) => {
  const listingAddress = {
    street_address: route.params.street_address,
    city: route.params.city,
    postcode: route.params.postcode,
  };

  return <ListingMap listingAddress={listingAddress} />;
};

export default ListingDetailsMapScreen;

const styles = StyleSheet.create({});
