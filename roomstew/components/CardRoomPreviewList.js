import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React from "react";

import CardRoomPreview from "./CardRoomPreview";

const CardRoomPreviewList = ({ roomList = [], handleDelete }) => {
  const handlePress = (index) => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => handleDelete(index) },
      { text: "No" },
    ]);
  };
  return (
    <View>
      {roomList.map((room, index) => {
        return (
          <CardRoomPreview
            key={index}
            roomNumber={index + 1}
            roomSize={room.room_size}
            isFurnished={room.room_is_furnished}
            startDate={room.start_date.toString()}
            endDate={room.end_date.toString()}
            rent={room.rent}
            deposit={room.room_deposit}
            onPress={() => handlePress(index)}
          />
        );
      })}
    </View>
  );
};

export default CardRoomPreviewList;

const styles = StyleSheet.create({});
