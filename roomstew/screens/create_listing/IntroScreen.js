import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={{ flex: 1, padding: 20 }}>
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
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },

  postContainer: {
    flex: 0.4,

    overflow: "hidden",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  postTouchableOpacity: {
    flex: 1,

    borderColor: colors.black,
    borderRadius: 15,
    overflow: "hidden",
  },

  imageContainer: {
    flex: 0.7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
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
