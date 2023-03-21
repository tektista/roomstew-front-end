//a custom AppText component. The style of the text is set from config/styles
//style propr is passed incase any additional styles are needed from the caller of the component

import { View, Text } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

export default function ShowMoreDesc({
  description,

  onPress,
  children,
  style,
}) {
  return (
    description &&
    description.length > 256 && (
      <AppText onPress={onPress} style={[defaultStyles.text, style]}>
        {children}
      </AppText>
    )
  );
}
