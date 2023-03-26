import React from "react";

import AccountScreen from "../screens/AccountScreen";

import UserListingsResultsScreen from "../screens/listing_details_user/UserListingsResultsScreen";
import UserListingDetailsScreen from "../screens/listing_details_user/UserListingDetailsScreen";
import UserListingMapScreen from "../screens/listing_details_user/UserListingMapScreen";
import UserListingRoomDetailsScreen from "../screens/listing_details_user/UserListingRoomDetailsScreen";
import UserListingShowMoreDescriptionScreen from "../screens/listing_details_user/UserListingShowMoreDescriptionScreen";
import UserListingShowMoreDetailsScreen from "../screens/listing_details_user/UserListingShowMoreDetailsScreen";

import SavedListingsResultsScreen from "../screens/listing_details_user_saved/SavedListingsResultsScreen";
import SavedListingDetailsScreen from "../screens/listing_details_user_saved/SavedListingDetailsScreen";
import SavedListingMapScreen from "../screens/listing_details_user_saved/SavedListingMapScreen";
import SavedListingRoomDetailsScreen from "../screens/listing_details_user_saved/SavedListingRoomDetailsScreen";
import SavedListingShowMoreDescriptionScreen from "../screens/listing_details_user_saved/SavedListingShowMoreDescriptionScreen";
import SavedListingShowMoreDetailsScreen from "../screens/listing_details_user_saved/SavedListingShowMoreDetailsScreen";

import UserListingUpdateRoomScreen from "../screens/listing_details_user/UserListingUpdateRoomScreen";

import UserListingUpdatePrefsScreen from "../screens/listing_details_user/UserListingUpdatePrefsScreen";
import UserListingUpdateDescScreen from "../screens/listing_details_user/UserListingUpdateDescScreen";

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
      {/* MY ACCOUNT PAGE */}
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: "My Account" }}
      />

      {/* USER LISTINGS*/}
      <Stack.Screen
        name="UserListingsResultsScreen"
        component={UserListingsResultsScreen}
        options={{ title: "My Listings" }}
      />

      {/* EDIT LISTING SCREENS */}
      <Stack.Screen
        name="UserListingUpdatePrefsScreen"
        component={UserListingUpdatePrefsScreen}
        options={{ title: "Roommate Preferences" }}
      />

      <Stack.Screen
        name="UserListingUpdateDescScreen"
        component={UserListingUpdateDescScreen}
        options={{ title: "Description & Shared Area Photos" }}
      />
      {/* EDIT LISTING SCREENS */}

      <Stack.Screen
        name="UserListingDetailsScreen"
        component={UserListingDetailsScreen}
        options={{ title: "Listing Details" }}
      />

      <Stack.Screen
        name="UserListingMapScreen"
        component={UserListingMapScreen}
        options={{ title: "Location" }}
      />

      <Stack.Screen
        name="UserListingRoomDetailsScreen"
        component={UserListingRoomDetailsScreen}
        options={{ title: "Room Details" }}
      />

      <Stack.Screen
        name="UserListingShowMoreDescriptionScreen"
        component={UserListingShowMoreDescriptionScreen}
        options={{ title: "Description" }}
      />

      <Stack.Screen
        name="UserListingShowMoreDetailsScreen"
        component={UserListingShowMoreDetailsScreen}
        options={{ title: "Details" }}
      />
      {/* EDIT A ROOM SCREEN */}
      <Stack.Screen
        name="UserListingUpdateRoomScreen"
        component={UserListingUpdateRoomScreen}
        options={{ title: "Edit Room" }}
      />
      {/* EDIT A ROOM SCREEN */}

      {/* USER SAVED LISTINGS */}
      <Stack.Screen
        name="SavedListingsResultsScreen"
        component={SavedListingsResultsScreen}
        options={{ title: "Saved Listings" }}
      />

      <Stack.Screen
        name="SavedListingDetailsScreen"
        component={SavedListingDetailsScreen}
        options={{ title: "Listing Details" }}
      />

      <Stack.Screen
        name="SavedListingMapScreen"
        component={SavedListingMapScreen}
        options={{ title: "Location" }}
      />

      <Stack.Screen
        name="SavedListingShowMoreDescriptionScreen"
        component={SavedListingShowMoreDescriptionScreen}
        options={{ title: "Description" }}
      />

      <Stack.Screen
        name="SavedListingShowMoreDetailsScreen"
        component={SavedListingShowMoreDetailsScreen}
        options={{ title: "Details" }}
      />

      {/* ROOM SCREEN */}
      <Stack.Screen
        name="SavedListingRoomDetailsScreen"
        component={SavedListingRoomDetailsScreen}
        options={{ title: "Room Details" }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
