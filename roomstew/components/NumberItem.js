import { StyleSheet, Text as AppText, View } from "react-native";
import React from "react";

import AppText from "../components/AppText";
import ListItemSeparator from "./ListItemSeparator";

const NumberItem = ({ number }) => {
  return (
    <View>
      <AppText> {number} </AppText>
    </View>
  );
};

export default NumberItem;

const styles = StyleSheet.create({});
