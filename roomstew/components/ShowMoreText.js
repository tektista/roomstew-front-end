//a custom AppText component. The style of the text is set from config/styles
//style propr is passed incase any additional styles are needed from the caller of the component

import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function ShowMoreText({
  pageToNavigateTo,
  listingFromDB,
  roomCount,
  children,
  style,
}) {
  const navigation = useNavigation();

  return (
    <Text
      onPress={() =>
        navigation.navigate(pageToNavigateTo, {
          listingFromDB: listingFromDB,
          roomCount: roomCount,
        })
      }
      style={[defaultStyles.text, style]}
    >
      {children}
    </Text>
  );
}
