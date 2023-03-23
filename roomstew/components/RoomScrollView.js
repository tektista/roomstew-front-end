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
          onPressEdit={onPressEdit}
          onPressDelete={() => onPressDelete(roomObj.room_id)}
        />
      ))}
    </ScrollView>
  );
};

export default RoomScrollView;

const styles = StyleSheet.create({
  roomScrollView: {
    width: "100%",
    height: 250,
  },
});
