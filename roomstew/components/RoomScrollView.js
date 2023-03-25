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
      <View style={styles.roomCardContainer}>
        {formattedRoomDetailsList.map((roomObj, index) => (
          <CardRoom
            isUserListing={isUserListing}
            key={index}
            roomObj={roomObj}
            roomNumber={index}
            onPress={() => onPress({ roomId: roomObj.room_id })}
            onPressEdit={() => onPressEdit(roomObj.room_id)}
            onPressDelete={() => onPressDelete(roomObj.room_id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RoomScrollView;

const styles = StyleSheet.create({
  roomScrollView: {
    width: "100%",
    height: 250,
  },
  roomCardContainer: {
    shadowOffset: {
      width: 2,
      height: 2, // Add this line
    },
    shadowOpacity: 0.3, // Add this line
    shadowRadius: 5, // Add this line
  },
});
