import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
<Feather name="plus-circle" size={24} color="black" />;
import colors from "../../roomstew/config/colors";

const ExpoVectorIcon = ({ family, name, size = 24, color = colors.black }) => {
  if (family === "mci") {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }
  if (family === "mi") {
    return <MaterialIcons name={name} size={size} color={color} />;
  }

  if (family === "i") {
    return <Ionicons name={name} size={size} color={color} />;
  }

  if (family === "ei") {
    return <EvilIcons name={name} size={size} color={color} />;
  }
  if (family === "f") {
    return <Feather name={name} size={size} color={color} />;
  }
  return <Text>Icon not found</Text>;
};

export default ExpoVectorIcon;

const styles = StyleSheet.create({});
