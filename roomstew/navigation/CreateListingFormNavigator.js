import React from "react";

import LocationFormScreen from "../screens/create_listing/LocationFormScreen";
import PropertyDetailsFormScreen from "../screens/create_listing/PropertyDetailsFormScreen";
import PropertyDetailsNumberInputScreen from "../screens/create_listing/PropertyDetailsNumberInputScreen";

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
        name="NumberInputScreen"
        component={PropertyDetailsNumberInputScreen}
      />
    </Stack.Navigator>
  );
};

export default CreateListingFormNavigator;
