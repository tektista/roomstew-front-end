import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import ExpoVectorIcon from "../../app/components/ExpoVectorIcon";
import colors from "../config/colors";

const SaveButton = ({ onPress, isSaved }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.saveContainer}>
        {isSaved === false ? (
          <ExpoVectorIcon
            family="mci"
            name="cards-heart-outline"
            size={35}
            color="red"
          />
        ) : (
          <ExpoVectorIcon
            family="mci"
            name="cards-heart"
            size={35}
            color="red"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({});
