import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

// import CheckBox from "@react-native-community/checkbox";
// import { CheckBox } from "@rneui/themed";
import Checkbox from "expo-checkbox";

const AppCheckboxInput = ({
  value,
  onValueChange,
  title,
  subTitle,
  image,
  IconComponent,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.light}>
      <View style={styles.container}>
        <View style={styles.detailsWrapper}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> {title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle} </AppText>}
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox value={value} onValueChange={onValueChange} />
        </View>
      </View>
    </TouchableHighlight>

    // <View style={styles.container}>
    //   <Text>{title}</Text>
    //   <View style={styles.checkboxContainer}>
    //     <Checkbox value={value} onValueChange={onValueChange} />
    //   </View>
    // </View>
  );
};

export default AppCheckboxInput;

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

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });

/* Description: this is to return a custom component that contains a description
along with a checkbox */
