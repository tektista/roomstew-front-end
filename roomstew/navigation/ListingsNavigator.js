import React from "react";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/listing_details/ListingDetailsScreen";
import ListingDetailsShowMoreDetailsScreen from "../screens/listing_details/ListingDetailsShowMoreDetailsScreen";
import ListingDetailsShowMoreDescScreen from "../screens/listing_details/ListingDetailsShowMoreDescScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen
      name="ListingDetailsShowMoreDetailsScreen"
      component={ListingDetailsShowMoreDetailsScreen}
    />
    <Stack.Screen
      name="ListingDetailsShowMoreDescScreen"
      component={ListingDetailsShowMoreDescScreen}
    />
  </Stack.Navigator>
);

export default ListingsNavigator;

/* Description: This is a stack navigator for the Listings -> Listing details screen */
