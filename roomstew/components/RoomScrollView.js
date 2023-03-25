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
import CardRoom from "./CardRoom";
import ExpoVectorIcon from "./ExpoVectorIcon";

const RoomScrollView = ({
  isUserListing,
  formattedRoomDetailsList,
  onPress,
  onPressEdit,
  onPressDelete,
}) => {
  return (
    <ScrollView
      style={styles.roomScrollView}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {formattedRoomDetailsList.map((roomObj, index) => (
        <CardRoom
          isUserListing={isUserListing}
          key={index}
          roomObj={roomObj}
          roomNumber={index}
          onPress={() => onPress({ roomId: roomObj.room_id })}
          onPressEdit={() => onPressEdit(roomObj.room_id)}
          onPressDelete={() => onPressDelete(roomObj.room_id)}
          style={{ width: 310, height: 210 }}
        />
      ))}
    </ScrollView>
  );
};

export default RoomScrollView;

const styles = StyleSheet.create({
  roomScrollView: {
    width: "100%",
    padding: 5,

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
