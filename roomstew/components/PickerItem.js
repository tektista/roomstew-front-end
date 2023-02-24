import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";

const PickerItem = ({ value, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.textContainer}>
      <AppText style={styles.text}>
        {value} {"bathrooms"}
      </AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    padding: 20,
  },
});
