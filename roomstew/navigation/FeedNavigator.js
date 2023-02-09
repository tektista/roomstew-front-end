import React from "react";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

/* Description: This is a stack navigator for the Listings -> Listing details screen */