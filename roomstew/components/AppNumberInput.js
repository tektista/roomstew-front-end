import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

import AppText from "./AppText";
import AppTextInputDisabled from "./AppTextInputDisabled";
import colors from "../config/colors";

//This should have a state for keeping track the value of the subTitle value

const AppNumberInput = ({
  title,
  IconComponent,
  value,
  onChangeText,
  ...otherProps
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.detailsWrapper}>
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title} </AppText>
            <AppTextInputDisabled
              value={value}
              onChangeText={onChangeText}
              {...otherProps}
            />
          </View>
        </View>

        {/* <View style={styles.checkboxContainer}>
          <AppText>{subTitle}</AppText>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default AppNumberInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },

  detailsWrapper: {
    flexDirection: "row",
  },
});
