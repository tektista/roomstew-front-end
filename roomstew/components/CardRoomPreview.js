import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const CardRoomPreview = ({
  roomNumber,
  roomSize,
  isFurnished,
  startDate,
  endDate,
  rent,
  deposit,
  onPress,
}) => {
  return (
    <View style={styles.roomCard}>
      <View style={styles.titleContainer}>
        <AppText>Room {roomNumber}</AppText>
      </View>

      <View style={styles.roomDetailsContainer}>
        <AppText>{roomSize === 0 ? "Single Room" : "Double Room"}</AppText>
        <AppText>{roomSize === 0 ? "Unfurnished" : "Furnished"}</AppText>
      </View>
      <View style={styles.startEndDateContainer}>
        <AppText>
          {startDate} - {endDate}
        </AppText>
      </View>
      <View style={styles.rentDepositContainer}>
        <AppText>Rent: £{rent} /month</AppText>
        <AppText>Deposit: £{deposit}</AppText>
      </View>

      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.deleteContainer}>
          <AppText style={styles.deleteText}> Delete</AppText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CardRoomPreview;

const styles = StyleSheet.create({
  roomCard: {
    width: "100%",
    height: 250,

    flex: 1,

    //temp
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 15,

    overflow: "hidden",

    padding: 10,
  },
  titleContainer: {
    flex: 1,
  },

  roomDetailsContainer: {
    flex: 2,

    width: "100%",
  },
  startEndDateContainer: {
    flex: 1,
    flexDirection: "row",
  },
  rentDepositContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteContainer: {
    borderTopWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  deleteText: {
    color: colors.danger,
  },
});
