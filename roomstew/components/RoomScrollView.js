import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

const RoomScrollView = ({ formattedRoomDetailsList, onPress }) => {
  return (
    <ScrollView
      style={styles.roomScrollView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {formattedRoomDetailsList.map((roomObj, index) => (
        <TouchableOpacity
          style={styles.roomCardContainer}
          key={index}
          onPress={() =>
            onPress({
              roomId: roomObj.room_id,
            })
          }
        >
          {/* 1/3 */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <AppText>Room {index + 1}</AppText>
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
      ))}
    </ScrollView>
  );
};

export default RoomScrollView;

const styles = StyleSheet.create({
  roomScrollView: {
    width: "100%",
    height: 200,
  },

  roomCardContainer: {
    width: 275,
    padding: 10,
    marginRight: 15,
    marginBottom: 10,

    display: "flex",

    borderWidth: 1,
    borderColor: colors.black,
  },
});
