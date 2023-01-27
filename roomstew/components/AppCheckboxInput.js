import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

// import CheckBox from "@react-native-community/checkbox";
// import { CheckBox } from "@rneui/themed";
import Checkbox from "expo-checkbox";

const AppCheckboxInput = ({ value, checkboxDescription, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text>{checkboxDescription}</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox value={value} onValueChange={onValueChange} />
      </View>
    </View>
  );
};

export default AppCheckboxInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

/* Description: this is to return a custom component that contains a description
along with a checkbox */
