import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const CardRoom = ({ roomObj, roomNumber, onPress }) => {
  console.log(roomObj);
  return (
    <TouchableOpacity style={styles.roomCardContainer} onPress={onPress}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <AppText>Room {roomNumber + 1}</AppText>
          <AppText>{roomObj.room_size}</AppText>
        </View>

        <View>
          <AppText>Available:</AppText>
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

      {/* 2/3 */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
        }}
      >
        <View>
          <AppText>Rent:</AppText>
          <AppText>£{roomObj.rent} /month</AppText>
        </View>

        <View>
          <AppText>Deposit:</AppText>

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
  );
};

export default CardRoom;

const styles = StyleSheet.create({
  roomCardContainer: {
    width: 275,
    padding: 10,
    marginRight: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
});
