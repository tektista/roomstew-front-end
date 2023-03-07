import React from "react";

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
      <Stack.Screen name="LocationFormScreen" component={LocationFormScreen} />
      <Stack.Screen name="DetailsFormScreen" component={DetailsFormScreen} />
      <Stack.Screen
        name="PreferencesFormScreen"
        component={PreferencesFormScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="DescriptionFormScreen"
        component={DescriptionFormScreen}
      ></Stack.Screen>

      <Stack.Screen
        name="RoomsFormScreen"
        component={RoomsFormScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CreateListingFormNavigator;
