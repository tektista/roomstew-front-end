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

import ExpoVectorIcon from "./ExpoVectorIcon";

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
  hasLivingRoom,
  hasHMO,
  bathroomCount,
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

          <View style={styles.topBarContainer}>
            <View style={styles.rentContainer}>
              <AppText style={styles.smallRentText}>from </AppText>
              <AppText style={styles.rentText}>£{minRoomRent}</AppText>
              <AppText style={styles.smallRentText}> /month</AppText>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", paddingHorizontal: 5 }}>
                <ExpoVectorIcon family="mci" name="sofa" />

                {hasLivingRoom === 1 ? (
                  <ExpoVectorIcon family="mi" name="check-circle" />
                ) : (
                  <ExpoVectorIcon family="mci" name="close-circle" />
                )}
              </View>

              <View style={{ flexDirection: "row", paddingHorizontal: 5 }}>
                <ExpoVectorIcon family="mci" name="toilet" />
                <AppText style={{ fontWeight: "bold" }}>
                  {bathroomCount}
                </AppText>
              </View>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <AppText style={styles.titleText}>{title}</AppText>

            <View
              style={{
                flexDirection: "row",
                width: "80%",
                paddingHorizontal: 7,
                paddingTop: 10,
              }}
            >
              <ExpoVectorIcon family="i" name="location-outline" />

              <AppText style={styles.addressText}>
                {streetAddress}, {city}, {postcode}
              </AppText>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingTop: 10,
              }}
            >
              <ExpoVectorIcon family="mci" name="bed" />

              <AppText style={styles.roomsAvailableText}>
                {numRoomsAvailable} rooms available
              </AppText>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                paddingTop: 10,
              }}
            >
              {hasHMO ? (
                <ExpoVectorIcon family="mi" name="check-circle" />
              ) : (
                <ExpoVectorIcon family="mci" name="close-circle" />
              )}
              <AppText> HMO</AppText>
            </View>

            <View style={styles.datesContainer}>
              <View style={styles.dateAvailableContainer}>
                <AppText>Available</AppText>
                <AppText style={styles.dateAvailableText}>
                  {earliestRoomDateAvailable}
                </AppText>
                <View style={styles.dateAvailableContainer}></View>
              </View>
              <View style={styles.dateAddedContainer}>
                <View style={{ alignItems: "flex-end" }}>
                  <AppText>Added</AppText>
                  <AppText style={styles.dateAddedText}>{dateAdded}</AppText>
                </View>
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
    borderColor: colors.black,
    height: 600,
  },

  image: {
    width: "100%",
    height: 200,
  },

  //TOP BAR CONTAINER
  topBarContainer: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    padding: 15,
    paddingVertical: 20,
    justifyContent: "space-between",
  },

  rentContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  smallRentText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },

  rentText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },

  // DETAILS CONTAINER
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
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
    display: "flex",

    alignItems: "center",
    fontSize: 17,
    color: colors.black,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  roomsAvailableText: {
    display: "flex",

    alignItems: "center",

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
