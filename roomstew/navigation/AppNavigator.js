import React from "react";
import ListingsNavigator from "./ListingsNavigator";
import CreateListingFormNavigator from "./CreateListingFormNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Search"
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
      name="Create a Listing"
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
      name="My Account"
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
