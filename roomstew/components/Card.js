import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import AppText from "./AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Card({
  minRoomRent,
  streetAddress,
  city,
  postcode,
  title,
  numRoomsAvailable,
  earliestRoomDateAvailable,
  dateAdded,
  dataUrl,
  saved,
  onPress,
  onPressSave,
}) {
  // const [isSaved, setIsSaved] = useState(saved);
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{ flex: 1 }}>
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

      {/* <TouchableOpacity
        style={{ flex: 1 }}
        onPress={

          () => {
            
            setIsSaved(!isSaved)
            onPressSave()
          }
        
        }
      >
        <View style={styles.saveContainer}>
          {isSaved === true ? (
            <MaterialCommunityIcons
              name="cards-heart"
              size={30}
              color="black"
            />
          ) : (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={30}
              color="black"
            />
          )}
        </View>
      </TouchableOpacity> */}
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
    height: 500,
    // height: 500 + 20,
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
    flex: 0,

    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  dateAvailableContainer: {
    display: "flex",
  },

  saveContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderTopWidth: 1,
  },
});
