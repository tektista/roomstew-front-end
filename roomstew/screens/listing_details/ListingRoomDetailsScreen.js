import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import roomsService from "../../services/roomsService";
import convertRoomObjListForFrontEnd from "../../helpers/convertRoomObjListForFrontEnd";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";

import colors from "../../config/colors";
import Icon from "../../components/Icon";
import AppText from "../../components/AppText";
import ShowMoreDesc from "../../components/ShowMoreDesc";
import RoomDetailsScreenItems from "../../config/RoomDetailsScreenItems.js";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";

const { width } = Dimensions.get("window");
const height = (width / 100) * 60;

export default function ListingRoomDetailsScreen({ route, navigation }) {
  const roomId = route.params.roomId;

  const [roomFromDB, setRoomFromDB] = useState({});
  const [roomPhotosFromDB, setRoomPhotosFromDB] = useState([]);

  //   setRoomFromDB();

  const getRoomDetails = async () => {
    try {
      const response = await roomsService.getARoomsDetailsById(roomId);

      const convertedRoomObjList = convertRoomObjListForFrontEnd(
        response.data.roomObj
      );
      setRoomFromDB(convertedRoomObjList[0]);

      setRoomPhotosFromDB(
        convertPhotoListForFrontEnd(
          response.data.roomPhotoObjList,
          "room_photo"
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  useEffect(() => {
    console.log("roomFromDB");
    console.log(roomFromDB);
  }, [roomFromDB]);

  useEffect(() => {
    console.log("roomPhotosFromDB");
    console.log(roomPhotosFromDB);
  }, [roomPhotosFromDB]);

  return (
    <ScrollView>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {roomPhotosFromDB.map((photoObj, index) => (
          <Image
            key={index}
            source={{
              uri: photoObj.dataUrl,
            }}
            style={{ width, height, resizeMode: "cover" }}
          />
        ))}
      </ScrollView>

      <View style={styles.descriptionContainer}>
        <View style={styles.rentDepositContainer}>
          <AppText style={styles.title}>
            £{roomFromDB.rent}
            <AppText style={{ font: 24, color: colors.black }}> /month</AppText>
          </AppText>

          <AppText style={styles.title}>
            £{roomFromDB.deposit}
            <AppText style={{ font: 24, color: colors.black }}>
              {" "}
              deposit
            </AppText>
          </AppText>
        </View>

        <AppText style={styles.description}>
          {roomFromDB.room_description &&
          roomFromDB.room_description.length > 256
            ? roomFromDB.room_description.slice(0, 256) + " ..."
            : roomFromDB.room_description}
        </AppText>

        {roomFromDB.room_description &&
          roomFromDB.room_description.length > 256 && (
            <View style={styles.showMoreContainer}>
              <ShowMoreDesc
                style={styles.showMore}
                pageToNavigateTo={"ListingDetailsShowMoreDescScreen"}
                dataToPassToPage={roomFromDB.room_description}
              >
                Show More
              </ShowMoreDesc>
            </View>
          )}
      </View>

      <View style={styles.detailsContainer}>
        {RoomDetailsScreenItems.map((item) => (
          <View key={item.title}>
            <ListItem
              title={item.title}
              subTitle={<Text>{roomFromDB[item.roomFromDBName]}</Text>}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
            <ListItemSeparator />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  descriptionContainer: { padding: 10, backgroundColor: colors.primary },

  rentDepositContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.white,
  },

  description: {},

  showMoreContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  showMore: {
    color: colors.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  roomScrollView: {
    width: "100%",
    height: 200,
    paddingTop: 20,
  },

  roomCardContainer: {
    width: 275,
    padding: 10,
    marginRight: 15,

    display: "flex",

    borderWidth: 1,
    borderColor: "black",
  },
});
