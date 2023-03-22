import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Card({
  image,
  minRoomRent,
  streetAddress,
  city,
  postcode,
  title,
  numRoomsAvailable,
  earliestRoomDateAvailable,
  dataUrl,
  dateAdded,
  onPress,
  onPressEdit,
  onPressDelete,
  isUserListing,
}) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{ flex: 9 }}>
          <Image
            style={styles.image}
            source={{
              uri: dataUrl,
            }}
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.rentTextContainer}>
              <AppText style={styles.smallRentText}>from </AppText>£
              {minRoomRent}
              <AppText style={styles.smallRentText}> /month</AppText>
            </AppText>

            <AppText style={styles.titleText}>{title}</AppText>
            <AppText style={styles.addressText}>
              {streetAddress}, {city}, {postcode}
            </AppText>

            <AppText style={styles.roomsAvailableText}>
              {numRoomsAvailable} rooms available
            </AppText>

            <View style={styles.datesContainer}>
              <View style={styles.dateAvailableContainer}>
                <AppText>Available from:</AppText>
                <AppText style={styles.dateAvailableText}>
                  {earliestRoomDateAvailable}
                </AppText>
                <View style={styles.dateAvailableContainer}></View>
              </View>

              <View style={styles.dateAddedContainer}>
                <AppText>Added:</AppText>
                <AppText style={styles.dateAddedText}>{dateAdded}</AppText>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {isUserListing && (
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
          }}
          onPress={onPressEdit}
        >
          <TouchableOpacity onPress={onPressEdit} style={{ flex: 1 }}>
            <View style={styles.editContainer}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={30}
                color="black"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressDelete} style={{ flex: 1 }}>
            <View style={styles.deleteContainer}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 5,
    marginTop: 20,

    borderColor: colors.black,
    borderWidth: 1,
    height: 500 + 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  //RENT
  rentTextContainer: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    backgroundColor: colors.primary,

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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  addressText: {
    fontSize: 17,
    color: colors.black,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  roomsAvailableText: {
    fontSize: 17,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  datesContainer: {
    fontSize: 17,
    color: colors.white,
    padding: 10,

    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  dateAvailableContainer: {
    display: "flex",
  },

  editContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRightWidth: 0.5,

    flex: 1,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.black,
    backgroundColor: colors.white,
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderLeftWidth: 0.5,

    flex: 1,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.black,
    backgroundColor: colors.white,
  },
});
