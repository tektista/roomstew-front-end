import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ imageURI }) => {
  return (
    <View style={styles.container}>
      {!imageURI && (
        <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
      )}

      {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});
