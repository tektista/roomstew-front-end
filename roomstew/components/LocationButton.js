import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ExpoVectorIcon from "../../app/components/ExpoVectorIcon";

const LocationButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <ExpoVectorIcon family="i" name="location-outline" size={35} />
      {children}
    </TouchableOpacity>
  );
};

export default LocationButton;
