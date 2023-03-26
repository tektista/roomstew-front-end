import React from "react";

import IntroScreen from "../screens/create_listing/IntroScreen";
import LocationFormScreen from "../screens/create_listing/LocationFormScreen";
import DetailsFormScreen from "../screens/create_listing/DetailsFormScreen";
import PreferencesFormScreen from "../screens/create_listing/PreferencesFormScreen";
import DescriptionFormScreen from "../screens/create_listing/DescriptionFormScreen";
import RoomsFormScreen from "../screens/create_listing/RoomsFormScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const CreateListingFormNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{ title: "Create a listing" }}
      />
      <Stack.Screen
        name="LocationFormScreen"
        component={LocationFormScreen}
        options={{ title: "Property Address" }}
      />
      <Stack.Screen
        name="DetailsFormScreen"
        component={DetailsFormScreen}
        options={{ title: "Property Details" }}
      />
      <Stack.Screen
        name="PreferencesFormScreen"
        component={PreferencesFormScreen}
        options={{ title: "Roommate Preferences" }}
      ></Stack.Screen>
      <Stack.Screen
        name="DescriptionFormScreen"
        component={DescriptionFormScreen}
        options={{ title: "Description & Shared Area Photos" }}
      ></Stack.Screen>

      <Stack.Screen
        name="RoomsFormScreen"
        component={RoomsFormScreen}
        options={{ title: "Property Rooms" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CreateListingFormNavigator;
