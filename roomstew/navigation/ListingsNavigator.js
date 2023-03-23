import React from "react";

// import ListingsScreen from "../screens/ListingsScreen";
// import ListingDetailsScreen from "../screens/listing_details/ListingDetailsScreen";
// import ListingDetailsShowMoreDetailsScreen from "../screens/listing_details/ListingDetailsShowMoreDetailsScreen";
// import ListingDetailsShowMoreDescScreen from "../screens/listing_details/ListingDetailsShowMoreDescScreen";
// import ListingDetailsRoomDetailsScreen from "../screens/listing_details/ListingRoomDetailsScreen";
// import ListingDetailsMapScreen from "../screens/listing_details/ListingDetailsMapScreen";

import ListingsSearchScreen from "../screens/listing_details_search/ListingsSearchScreen";
import ListingsResultsScreen from "../screens/listing_details_search/ListingsResultsScreen";
import ListingMapScreen from "../screens/listing_details_search/ListingMapScreen";
import ListingDetailsScreen from "../screens/listing_details_search/ListingDetailsScreen";
import ListingRoomDetailsScreen from "../screens/listing_details_search/ListingRoomDetailsScreen";
import ListingShowMoreDescriptionScreen from "../screens/listing_details_search/ListingShowMoreDescriptionScreen";
import ListingShowMoreDetailsScreen from "../screens/listing_details_search/ListingShowMoreDetailsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ListingsSearchScreen"
      component={ListingsSearchScreen}
    />

    <Stack.Screen
      name="ListingsResultsScreen"
      component={ListingsResultsScreen}
    />

    <Stack.Screen
      name="ListingDetailsScreen"
      component={ListingDetailsScreen}
    />

    <Stack.Screen name="ListingMapScreen" component={ListingMapScreen} />

    <Stack.Screen
      name="ListingRoomDetailsScreen"
      component={ListingRoomDetailsScreen}
    />

    <Stack.Screen
      name="ListingShowMoreDescriptionScreen"
      component={ListingShowMoreDescriptionScreen}
    />

    <Stack.Screen
      name="ListingShowMoreDetailsScreen"
      component={ListingShowMoreDetailsScreen}
    />
    {/* <Stack.Screen name="Listings" component={ListingsScreen} /> */}
    {/* 
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} /> */}

    {/*     
    <Stack.Screen
      name="ListingDetailsShowMoreDetailsScreen"
      component={ListingDetailsShowMoreDetailsScreen}
    />
    <Stack.Screen
      name="ListingDetailsShowMoreDescScreen"
      component={ListingDetailsShowMoreDescScreen}
    />
    <Stack.Screen
      name="ListingDetailsRoomDetailsScreen"
      component={ListingDetailsRoomDetailsScreen}
    />
    <Stack.Screen
      name="ListingDetailsMapScreen"
      component={ListingDetailsMapScreen}
    /> */}
  </Stack.Navigator>
);

export default ListingsNavigator;
/* Description: This is a stack navigator for the Listings -> Listing details screen */
