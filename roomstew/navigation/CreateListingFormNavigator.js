import React from "react";

import LocationFormScreen from "../screens/create_listing/LocationFormScreen";
import PropertyDetailsFormScreen from "../screens/create_listing/PropertyDetailsFormScreen";
import PropertyPreferencesFormScreen from "../screens/create_listing/PropertyPreferencesFormScreen";
import PropertyDescriptionFormScreen from "../screens/create_listing/PropertyDescriptionFormScreen";
import PropertyRoomsFormScreen from "../screens/create_listing/PropertyRoomsFormScreen";
import PropertyAddRoomFormScreen from "../screens/create_listing/PropertyAddRoomFormScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const CreateListingFormNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LocationFormScreen" component={LocationFormScreen} />
      <Stack.Screen
        name="PropertyDetailsFormScreen"
        component={PropertyDetailsFormScreen}
      />
      <Stack.Screen
        name="PropertyPreferencesFormScreen"
        component={PropertyPreferencesFormScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="PropertyDescriptionFormScreen"
        component={PropertyDescriptionFormScreen}
      ></Stack.Screen>

      <Stack.Screen
        name="PropertyRoomsFormScreen"
        component={PropertyRoomsFormScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="PropertyAddRoomFormScreen"
        component={PropertyAddRoomFormScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CreateListingFormNavigator;
