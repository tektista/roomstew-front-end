import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PropertyRoomsFormScreen = ({ navigation, route }) => {
  const values = route.params.values;
  console.log(values);

  console.log();
  return (
    <View>
      <Text>PropertyDetailsRoomScreen</Text>
    </View>
  );
};

export default PropertyRoomsFormScreen;

const styles = StyleSheet.create({});
