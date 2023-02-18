import React from "react";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingDetailsShowMoreDetailsScreen from "../screens/ListingDetailsShowMoreDetailsScreen";
import ListingDetailsShowMoreDescScreen from "../screens/ListingDetailsShowMoreDescScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={ListingScreen} />
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

export default FeedNavigator;

/* Description: This is a stack navigator for the Listings -> Listing details screen */
