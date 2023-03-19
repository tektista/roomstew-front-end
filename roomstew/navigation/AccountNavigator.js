import React from "react";
import AccountScreen from "../screens/AccountScreen";
import UserListingsScreen from "../screens/listing_details_user/UserListingsScreen";
import ListingDetailsScreen from "../screens/listing_details/ListingDetailsScreen";
import ListingDetailsShowMoreDetailsScreen from "../screens/listing_details/ListingDetailsShowMoreDetailsScreen";
import ListingDetailsShowMoreDescScreen from "../screens/listing_details/ListingDetailsShowMoreDescScreen";
import ListingDetailsRoomDetailsScreen from "../screens/listing_details/ListingRoomDetailsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Account Main Page */}
      <Stack.Screen name="Account" component={AccountScreen} />

      {/* My Saved Listings */}

      {/* My listings */}
      <Stack.Screen name="UserListingsScreen" component={UserListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
      <Stack.Screen
        name="ListingDetailsRoomDetailsScreen"
        component={ListingDetailsRoomDetailsScreen}
      />
      <Stack.Screen
        name="ListingDetailsShowMoreDescScreen"
        component={ListingDetailsShowMoreDescScreen}
      />
      <Stack.Screen
        name="ListingDetailsShowMoreDetailsScreen"
        component={ListingDetailsShowMoreDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
