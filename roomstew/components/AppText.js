//a custom AppText component. The style of the text is set from config/styles
//style propr is passed incase any additional styles are needed from the caller of the component

import { Text } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function AppText({ onPress, children, style }) {
  return (
    <Text onPress={onPress} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}
