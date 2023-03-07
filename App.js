// RoomStew
// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// import Screen from "./roomstew/components/Screen";
// import Card from "./roomstew/components/Card";
// import ListingScreen from "./roomstew/screens/ListingScreen";
// import LoginScreen from "./roomstew/screens/LoginScreen";
// import AccountScreen from "./roomstew/screens/AccountScreen";
// import AppForm from "./roomstew/components/forms/AppForm";
// import TextInputFormField from "./roomstew/components/forms/TextInputFormField";
// import CreateListingScreen from "./roomstew/screens/CreateListingScreen";

// import AppCheckboxInput from "./roomstew/components/AppCheckboxInput";
// import CheckboxFormField from "./roomstew/components/forms/CheckboxFormField";

// export default function App() {
//   return <ListingScreen />;
// }

// const styles = StyleSheet.create({
//   screen: {
//     backgroundColor: "yellow",
//   },
// });

// Test stack navigator

import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

import Screen from "./roomstew/components/Screen";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import navigationTheme from "./roomstew/navigation/navigationTheme";
import AppNavigator from "./roomstew/navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;

/* APP NAVIGATOR TEST BELOW  >>>>>>>>>>>> */

// import { StyleSheet, Text, View, Button } from "react-native";
// import React from "react";

// // Component imports
// import Screen from "./roomstew/components/Screen";

// //Import the nav container which is needed to wrap the stack navigator
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// // Import the stack nav
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import bottom nav
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// // Create a stack navigator
// const Stack = createNativeStackNavigator();

// // Create a stack navigator component, then use "Stack.Navigator" from created Stack object. In The component use "Stack." to access the Stack Navigator
// const FeedNavigator = () => (
//   <Stack.Navigator
//     // this applies to all screens when used in the stack navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "tomato",
//         headerTintColor: "white",
//         headerShown: false,
//       },
//     }}
//   >
//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//       //customizing a screen
//       options={{
//         headerStyle: {
//           backgroundColor: "tomato",
//           headerTintColor: "white",
//           headerShown: false,
//         },
//       }}
//     />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       // we can pass options to the screen we are navigating to, this can either be an object or a function that returns an object
//     />
//   </Stack.Navigator>
// );

// // No access to navigation prop as this is not a screen component listed in the stack nav
// const Link = () => {
//   //use the use navigation hook to access the navigation obj
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Click"
//       //use navigate from useNavigation hook to access the nav object
//       onPress={() => {
//         navigation.navigate("TweetDetails");
//       }}
//     />
//   );
// };

// /* react navigation gives us the prop "navigation which we can access in child components to navigate between screens"
// NOTE: navigation prop is only available in components that are called in "Stack.Screen" which are wrapped by the stack navigator
// e.g. Tweets and TweetDetails have access to the navigation prop, but any children of Tweets or TweetDetails do not have access to the navigation prop
// HOWEVER: we can use the navigation hook to access the navigation object
// */
// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Link />

//     {/* <Button
//       title="View Tweet"
//       // use nav prop to navigate to the name of the screen you want to navigate to
//       // we can use the second argument to pass data to the screen we are navigating to
//       onPress={() => {
//         navigation.navigate("TweetDetails", { id: 1 });
//       }}
//     /> */}
//   </Screen>
// );

// // we can access the data passed to the screen we are navigating to using the route prop
// // NOTE: just like the navigation prop, the route prop is only available in components that are called in "Stack.Screen" which are wrapped by the stack navigator
// // to access the route prop in child components, we can use the route hook
// const TweetDetails = ({ route }) => (
//   <Screen>
//     {/* <Text>Tweet Details {route.params.id} </Text> */}
//     <Text>Tweet Details </Text>
//   </Screen>
// );

// const AccountNavigator = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: "tomato",
//       activeTintColor: "white",
//       inactiveBackgroundColor: "#eee",
//       inactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       /* To have access to TweetDetails screen which is not a part of the TabNavigator,
//       we need to change component from "Tweets" to "StackNavigator" which has access to tweet details
//       NOTE: the tab navigator knows to display the Tweets screen as in the stack navigator, the first screen is the tweets screen
//       */

//       component={FeedNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Account"
//       component={AccountNavigator}
//       options={{
//         tabBarIcon: () => (
//           <MaterialCommunityIcons name="home" size={30} color="black" />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// // wrap the stack navigator in the navigation container
// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
