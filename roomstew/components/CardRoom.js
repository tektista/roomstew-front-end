import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

import ExpoVectorIcon from "./ExpoVectorIcon";

const CardRoom = ({
  isUserListing,
  roomObj,
  roomNumber,
  onPress,
  onPressEdit,
  onPressDelete,
}) => {
  return (
    <View style={styles.roomCardContainer}>
      <TouchableOpacity onPress={onPress} style={{ flex: 5 }}>
        <View style={{ flex: 1.5 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: colors.primary,
              padding: 10,
            }}
          >
            <View>
              <AppText style={styles.headerText}>Room {roomNumber + 1}</AppText>
              <AppText>{roomObj.room_size}</AppText>
            </View>

            <View>
              <AppText style={styles.headerText}>Available</AppText>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <AppText>{roomObj.start_date}</AppText>
              </View>
            </View>
          </View>
        </View>

        {/* 2/3 */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            backgroundColor: colors.white,
          }}
        >
          <View>
            <AppText>{roomObj.room_is_furnished}</AppText>
          </View>

          <View>
            <AppText>{roomObj.is_en_suite}</AppText>
          </View>
        </View>

        {/* 2/3 */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: 10,
            backgroundColor: colors.white,
          }}
        >
          <View>
            <AppText style={styles.headerText}>Rent</AppText>
            <AppText>£{roomObj.rent} /month</AppText>
          </View>

          <View>
            <AppText style={styles.headerText}>Deposit</AppText>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <AppText>£{roomObj.deposit}</AppText>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {isUserListing && (
        <View
          style={{
            flex: 1,
            borderTopWidth: 1,
            flexDirection: "row",
            backgroundColor: colors.white,
          }}
        >
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressEdit}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
              }}
            >
              <ExpoVectorIcon family="mci" name="pencil-outline" size={24} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }} onPress={onPressDelete}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ExpoVectorIcon family="mci" name="trash-can-outline" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardRoom;

const styles = StyleSheet.create({
  roomCardContainer: {
    flex: 1,
    width: 310,
    marginRight: 15,
    marginBottom: 10,
    borderColor: colors.black,
    borderRadius: 15,

    overflow: "hidden",
  },
  shadowStyles: {
    flex: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  headerText: {
    fontWeight: "bold",
  },
});
