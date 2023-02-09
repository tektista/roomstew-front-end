import React from "react";

import ListingsScreen from "../screens/ListingScreen";
import AccountScreen from "../screens/AccountScreen";
import CreateListingScreen from "../screens/CreateListingScreen";
import FeedNavigator from "./FeedNavigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={CreateListingScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;

/* Description: This is the the bottom tab navigator 
It is used to navigate between screens of the application
*/
