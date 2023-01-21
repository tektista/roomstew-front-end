import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";

//takes in a listing object and a room object as a prop

export default function Card({
  image,
  rent,
  title,
  roomsAvailable,
  dateAvailable,
  dateAdded,
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>

      <View style={styles.detailsContainer}>
        <View style={styles.rentContainer}>
          <AppText style={styles.rentText}>
            <AppText style={styles.rentSmallText}>from:</AppText> £{rent}
            <AppText style={styles.rentSmallText}> / month </AppText>
          </AppText>
        </View>

        <View style={styles.titleContainer}>
          <AppText style={styles.titleText}>{title}</AppText>
        </View>

        <View style={styles.roomsAvailableContainer}>
          <AppText>rooms available: {roomsAvailable}</AppText>
        </View>

        <View style={styles.datesContainer}>
          <View style={styles.dateAvailableContainer}>
            <AppText>available: {dateAvailable}</AppText>
          </View>

          <View style={styles.dateAddedContainer}>
            <AppText style={styles.dateAddedText}>added: {dateAdded}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light,
    marginBottom: 20,
    overflow: "hidden",

    //temp
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 1,

    height: 400,
  },
  image: {
    width: "100%",
    height: "60%",
  },

  detailsContainer: {
    backgroundColor: colors.light,
    flex: 1,
  },

  //RENT
  rentContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: colors.green,
  },
  rentText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  rentSmallText: {
    fontSize: 15,
  },

  //TITLE
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "red",
  },

  titleText: {},

  //ROOMS AVAIL
  roomsAvailableContainer: {
    flex: 1,
  },
  datesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //DATES AVAIl
  dateAvailableContainer: {
    flex: 1,
  },
  dateAddedContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
