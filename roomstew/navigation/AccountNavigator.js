import React from "react";
import AccountScreen from "../screens/AccountScreen";

import UserListingsScreen from "../screens/listing_details_user/UserListingsScreen";
import UserListingDetailsScreen from "../screens/listing_details_user/UserListingDetailsScreen.js";
import UserListingRoomDetailsScreen from "../screens/listing_details_user/UserListingRoomDetailsScreen";
import UserListingDetailsShowMoreDescScreen from "../screens/listing_details_user/UserListingDetailsShowMoreDescScreen";
import UserListingDetailsShowMoreDetailsScreen from "../screens/listing_details_user/UserListingDetailsShowMoreDetailsScreen";

import SavedListingsScreen from "../screens/listing_details_user/SavedListingsScreen";

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

      {/* <Stack.Screen name="UserListingsScreen" component={UserListingsScreen} /> */}

      {/* <Stack.Screen
        name="UserListingDetailsScreen"
        component={UserListingDetailsScreen}
      /> */}

      {/* <Stack.Screen
        name="UserListingRoomDetailsScreen"
        component={UserListingRoomDetailsScreen}
      /> */}

      {/* <Stack.Screen
        name="UserListingDetailsShowMoreDescScreen"
        component={UserListingDetailsShowMoreDescScreen}
      /> */}
      {/* 
      <Stack.Screen
        name="UserListingDetailsShowMoreDetailsScreen"
        component={UserListingDetailsShowMoreDetailsScreen}
      /> */}

      {/* MAP SCREEN */}

      {/*SAVED LISTINGS*/}

      {/* FINISH THIS */}

      {/* <Stack.Screen
        name="SavedListingsScreen"
        component={SavedListingsScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default AccountNavigator;
