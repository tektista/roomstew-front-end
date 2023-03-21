import React from "react";

import AccountScreen from "../screens/AccountScreen";
import UserListingsResultsScreen from "../screens/listing_details_user/UserListingsResultsScreen";
import UserListingDetailsScreen from "../screens/listing_details_user/UserListingDetailsScreen";
import UserListingMapScreen from "../screens/listing_details_user/UserListingMapScreen";
import UserListingRoomDetailsScreen from "../screens/listing_details_user/UserListingRoomDetailsScreen";
import UserListingShowMoreDescriptionScreen from "../screens/listing_details_user/UserListingShowMoreDescriptionScreen";
import UserListingShowMoreDetailsScreen from "../screens/listing_details_user/UserListingShowMoreDetailsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// reuse: listings, listing details, listing room details, listing show more desc, listing show more details
// for cards

/* 
Card - Edit Listing, Delete Listing
Listing Details - Edit  listing, Edit a room, Delete a room

Edit Listing - Takes you to form page of ONLY the listing form pages, with already filled in values
Edit a room - Each card has an edit button, takes you to form page of ONLY the room form pages, with already filled in values
*/

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Account Main Page */}
      <Stack.Screen name="AccountScreen" component={AccountScreen} />

      {/* USER LISTINGS*/}
      <Stack.Screen
        name="UserListingsResultsScreen"
        component={UserListingsResultsScreen}
      />

      <Stack.Screen
        name="UserListingDetailsScreen"
        component={UserListingDetailsScreen}
      />

      <Stack.Screen
        name="UserListingMapScreen"
        component={UserListingMapScreen}
      />

      <Stack.Screen
        name="UserListingRoomDetailsScreen"
        component={UserListingRoomDetailsScreen}
      />

      <Stack.Screen
        name="UserListingShowMoreDescriptionScreen"
        component={UserListingShowMoreDescriptionScreen}
      />

      <Stack.Screen
        name="UserListingShowMoreDetailsScreen"
        component={UserListingShowMoreDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
