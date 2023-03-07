import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import CardRoomPreview from "./CardRoomPreview";

const CardRoomPreviewList = ({
  roomList = [
    {
      roomNumber: 1,
      roomSize: 0,
      isFurnished: false,
      startDate: "01/01/2021",
      endDate: "01/01/2022",
      rent: 100,
      deposit: 100,
    },
  ],
}) => {
  return (
    <View>
      {roomList.map((room, index) => {
        console.log(room);
        return (
          <CardRoomPreview
            key={index}
            roomNumber={index + 1}
            roomSize={room.room_size}
            isFurnished={room.room_is_furnished}
            startDate={room.start_date}
            endDate={room.end_date}
            rent={room.rent}
            deposit={room.room_deposit}
          />
        );
      })}
    </View>
  );
};

export default CardRoomPreviewList;

const styles = StyleSheet.create({});
