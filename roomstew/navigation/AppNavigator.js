import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsNavigator from "./ListingsNavigator";
import CreateListingFormNavigator from "./CreateListingFormNavigator";

import AccountNavigator from "./AccountNavigator";

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
      name="Listings"
      component={ListingsNavigator}
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
      name="CreateListing"
      component={CreateListingFormNavigator}
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
      name="AccountNavigator"
      component={AccountNavigator}
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
