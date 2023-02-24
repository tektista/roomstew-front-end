import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const AppTextInputDisabled = ({ value, onChangeText }) => {
  return (
    <TextInput style={styles.text} value={value} onChangeText={onChangeText} />
  );
};

export default AppTextInputDisabled;

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
