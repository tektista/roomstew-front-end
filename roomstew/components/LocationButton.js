import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import ExpoVectorIcon from "./ExpoVectorIcon";

const LocationButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <ExpoVectorIcon family="i" name="location-outline" size={35} />
      <View style={{ width: "85%" }}>{children}</View>
    </TouchableOpacity>
  );
};

export default LocationButton;
