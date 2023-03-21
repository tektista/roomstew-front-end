import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ExpoVectorIcon from "../../app/components/ExpoVectorIcon";

const LocationButton = ({ family, name, size, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ExpoVectorIcon family={family} name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default LocationButton;

const styles = StyleSheet.create({});
