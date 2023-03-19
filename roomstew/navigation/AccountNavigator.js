import React from "react";
import AccountScreen from "../screens/AccountScreen";
import UserListingsScreen from "../screens/listing_details_user/UserListingsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Account Main Page */}
      <Stack.Screen name="Account" component={AccountScreen} />

      {/* My Saved Listings */}
      <Stack.Screen name="UserListingsScreen" component={UserListingsScreen} />

      {/* My listings */}
    </Stack.Navigator>
  );
};

export default AccountNavigator;
