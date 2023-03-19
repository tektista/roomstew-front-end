import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.postTouchableOpacity}
        onPress={() => navigation.navigate("LocationFormScreen")}
      >
        <View style={styles.imageContainer}>
          <MaterialCommunityIcons
            name="sign-direction-plus"
            size={100}
            color="black"
          />
        </View>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>create a listing</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 12,
  },

  postTouchableOpacity: {
    flex: 0.4,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,

    display: "flex",
  },

  imageContainer: {
    flex: 0.7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 0.3,
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 25,
  },
});