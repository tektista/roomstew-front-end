import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    tabBarOptions={{
      labelStyle: {
        display: "none",
      },
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="home-search"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={CreateListingScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

/* Description: This is the the bottom tab navigator 
It is used to navigate between screens of the application
*/
