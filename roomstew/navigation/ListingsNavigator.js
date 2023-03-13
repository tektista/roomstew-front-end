import React from "react";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/listing_details/ListingDetailsScreen";
import ListingDetailsShowMoreDetailsScreen from "../screens/listing_details/ListingDetailsShowMoreDetailsScreen";
import ListingDetailsShowMoreDescScreen from "../screens/listing_details/ListingDetailsShowMoreDescScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingsScreen} />
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
