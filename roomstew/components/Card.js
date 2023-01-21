import { Image, StyleSheet, View } from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({
  title,
  image,
  minRoomRent,
  numRoomsAvailable,
  earliestRoomDateAvailable,
  dateAdded,
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>

      <View style={styles.detailsContainer}>
        <AppText style={styles.rentText}>
          <AppText style={styles.smallRentText}>from </AppText>£{minRoomRent}
          <AppText style={styles.smallRentText}> /month</AppText>
        </AppText>

        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.roomsAvailableText}>
          rooms available: {numRoomsAvailable}
        </AppText>

        <View style={styles.datesContainer}>
          <AppText style={styles.dateAvailableText}>
            date available: {earliestRoomDateAvailable}
          </AppText>
          <AppText style={styles.dateAddedText}>
            date added: {dateAdded}
          </AppText>
        </View>
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,

    borderColor: colors.black,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    backgroundColor: "blue",
    // padding: 20,
  },

  //RENT
  rentText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    backgroundColor: colors.green,

    padding: 10,
    paddingVertical: 20,
  },

  smallRentText: {
    fontSize: 15,
    color: "black",
  },

  //TITLE
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
    backgroundColor: colors.white,
    padding: 10,
  },
  roomsAvailableText: {
    backgroundColor: colors.white,
    padding: 10,
  },

  //DATES
  datesContainer: { backgroundColor: colors.white, padding: 10 },

  dateAvailableText: {},
  dateAddedText: {},
});
