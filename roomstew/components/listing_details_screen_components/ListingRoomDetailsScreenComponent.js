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
import PhotoScrollView from "../../components/PhotoScrollView";
import Description from "../../components/Description";
import ListItemList from "../../components/ListItemList";

import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = (width / 100) * 60;

export default function ListingRoomDetailsScreenComponent() {
  const navigation = useNavigation();
  const route = useRoute();

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
      <PhotoScrollView photoObjListWIthDataUrl={roomPhotosFromDB} />

      <View style={styles.rentDepositContainerWrapper}>
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
      </View>

      <View style={styles.descriptionContainer}>
        <Description description={roomFromDB.room_description} />

        <ShowMoreDesc
          onPress={() =>
            navigation.navigate("ListingDetailsShowMoreDescScreen", {
              listingDescription: roomFromDB.room_description,
            })
          }
        />
      </View>

      <View style={styles.detailsContainer}>
        <ListItemList objFromDB={roomFromDB} items={RoomDetailsScreenItems} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  rentDepositContainerWrapper: { backgroundColor: colors.primary, padding: 15 },

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

  descriptionContainer: {
    padding: 15,
  },

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
