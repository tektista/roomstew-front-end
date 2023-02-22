import React from "react";

import LocationFormScreen from "../screens/create_listing/LocationFormScreen";
import PropertyDetailsFormScreen from "../screens/create_listing/PropertyDetailsFormScreen";

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
    </Stack.Navigator>
  );
};

export default CreateListingFormNavigator;
