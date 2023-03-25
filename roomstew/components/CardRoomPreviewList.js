import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React from "react";

import CardRoomPreview from "./CardRoomPreview";
import CardRoom from "./CardRoom";

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
        console.log(room);
        return (
          <View
            key={index}
            style={{
              height: 250,
              paddingVertical: 5,

              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            }}
          >
            <CardRoom
              roomObj={room}
              roomNumber={index}
              isCreateListing={true}
              style={{ width: "100%" }}
              onPressDeleteCreate={() => handlePress(index)}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CardRoomPreviewList;

const styles = StyleSheet.create({});
