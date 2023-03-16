import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({
  image,
  minRoomRent,
  streetAddress,
  city,
  postcode,
  title,
  numRoomsAvailable,
  earliestRoomDateAvailable,
  dateAdded,
  onPress,
  dataUrl,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: dataUrl,
          }}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.rentTextContainer}>
            <AppText style={styles.smallRentText}>from </AppText>£{minRoomRent}
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

      {/* <View style={styles.detailsContainer}>
          <View style={styles.rentContainer}>
            <AppText style={styles.smallRentText}>from</AppText>
            <AppText style={styles.rentText}> £{minRoomRent}</AppText>
            <AppText style={styles.smallRentText}> /month</AppText>
          </View>

          <View style={styles.descriptionContainer}>
            <AppText style={styles.titleText}>{title}</AppText>
            <AppText style={styles.addressText}>
              {"72b Craigu asdfasdf"}, {"Edinbudf"}, {"EH17"}{" "}
            </AppText>
            <AppText styles={styles.roomsAvailableText}>
              {3} rooms available
            </AppText>
          </View>

          <View style={styles.descriptionContainer}></View>
          <View style={styles.datesContainer}></View>
        </View> */}
    </TouchableWithoutFeedback>
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
  // card: {
  //   borderRadius: 15,
  //   backgroundColor: colors.white,
  //   overflow: "hidden",
  //   marginBottom: 20,
  //   borderColor: colors.black,
  //   borderWidth: 1,

  //   height: 450,
  // },

  // image: {
  //   width: "100%",
  //   height: 200,
  // },

  // detailsContainer: {
  //   backgroundColor: "blue",
  //   display: "flex",
  //   // padding: 20,
  // },

  // //RENT
  // rentTextContainer: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: colors.white,
  //   backgroundColor: colors.primary,

  //   padding: 10,
  //   paddingVertical: 20,
  // },

  // smallRentText: {
  //   fontSize: 15,
  //   color: "black",
  // },

  // //TITLE
  // titleText: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: colors.black,
  //   backgroundColor: colors.white,
  //   paddingHorizontal: 10,
  //   paddingTop: 10,
  // },
  // addressText: {
  //   fontSize: 16,
  //   color: colors.black,
  //   backgroundColor: colors.white,
  //   paddingHorizontal: 10,
  // },
  // roomsAvailableText: {
  //   fontSize: 16,
  //   backgroundColor: colors.white,
  //   paddingHorizontal: 10,
  // },
  // datesContainer: { fontSize: 20, color: colors.white, padding: 10 },
});

// detailsContainer: {
//   display: "flex",
//   flex: 1,
//   backgroundColor: "blue",
// },

// rentContainer: {
//   flex: 0.5,
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   backgroundColor: colors.primary,

//   padding: 10,
// },
// descriptionContainer: {
//   flex: 1,
//   backgroundColor: "blue",
//   padding: 10,
// },
// datesContainer: {
//   flex: 1,
//   backgroundColor: "green",
// },

// smallRentText: { fontSize: 15, color: colors.black },

// rentText: {
//   fontSize: 20,
//   fontWeight: "bold",
//   color: colors.white,
// },

// titleText: {
//   fontSize: 25,
//   fontWeight: "bold",
//   color: colors.black,

//   numberOfLines: 2,
// },

// addressText: {
//   fontSize: 20,
//   color: colors.black,
// },
