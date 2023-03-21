import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "./AppText";

const Description = ({ description }) => {
  return (
    <AppText style={styles.description}>
      {description && description.length > 256
        ? description.slice(0, 256) + " ..."
        : description}
    </AppText>
  );
};

export default Description;

const styles = StyleSheet.create({});
