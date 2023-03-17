import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import listingsService from "../../services/listingsService";

import ListingDetailsScreenItems from "../../config/ListingDetailsScreenItems";

import convertListingForFrontEnd from "../../helpers/convertListingForFrontEnd";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";
import convertRoomObjListForCards from "../../helpers/convertRoomObjListForCards";

import colors from "../../config/colors";
import AppText from "../../components/AppText";
import ShowMoreText from "../../components/ShowMoreText";
import ShowMoreDesc from "../../components/ShowMoreDesc";

import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import Icon from "../../components/Icon";

const { width } = Dimensions.get("window");
const height = (width / 100) * 60;

export default function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params.item;

  const [listingFromDB, setListingFromDB] = useState({});
  const [listingPhotosFromDB, setListingPhotosFromDB] = useState([]);
  const [listingRoomsCardDetailsFromDB, setListingRoomCardDetailsListFromDB] =
    useState([]);

  const getListingDetails = async () => {
    try {
      const response = await listingsService.getAListingById(listing.id);

      setListingFromDB(convertListingForFrontEnd(response.data.listingObj[0]));

      setListingPhotosFromDB(
        convertPhotoListForFrontEnd(response.data.listingPhotoObjList)
      );

      setListingRoomCardDetailsListFromDB(
        convertRoomObjListForCards(response.data.listingRoomCardDetailsList)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  useEffect(() => {
    console.log(listingRoomsCardDetailsFromDB);
  }, [listingRoomsCardDetailsFromDB]);

  useEffect(() => {
    if (listingPhotosFromDB.length > 0) {
    }
  }, [listingPhotosFromDB]);

  return (
    <ScrollView>
      {/* Image ScrollView */}
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {listingPhotosFromDB.map((photoObj, index) => (
          <Image
            key={index}
            source={{
              uri: photoObj.dataUrl,
            }}
            style={{ width, height, resizeMode: "cover" }}
          />
        ))}
      </ScrollView>

      <View style={styles.userContainer}>
        <ListItem
          image={require("../../assets/apartment.jpg")}
          title="John Bautista"
          subTitle="5 Listings"
        ></ListItem>
      </View>

      <View style={styles.titleContainer}>
        <AppText style={styles.title}>
          {listingFromDB.title} {listingFromDB.listing_id}
        </AppText>

        <AppText style={styles.description}>
          {listingFromDB.description && listingFromDB.description.length > 256
            ? listingFromDB.description.slice(0, 256) + " ..."
            : listingFromDB.description}
        </AppText>

        <View style={styles.showMoreContainer}>
          <ShowMoreDesc
            style={styles.showMore}
            pageToNavigateTo={"ListingDetailsShowMoreDescScreen"}
            dataToPassToPage={listingFromDB.description}
          >
            Show More
          </ShowMoreDesc>

          {/* Room ScrollView */}
          <ScrollView
            style={styles.roomScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {listingRoomsCardDetailsFromDB.map((roomObj, index) => (
              <View style={styles.roomCardContainer} key={index}>
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
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        {ListingDetailsScreenItems.slice(0, 5).map((item) => (
          <View key={item.title}>
            <ListItem
              title={item.title}
              subTitle={
                item.title === "Rooms" && listing.numRoomsAvailable ? (
                  listing.numRoomsAvailable + " available"
                ) : (
                  <Text>{listingFromDB[item.listingFromDBName]}</Text>
                )
              }
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

        <View style={styles.showMoreContainer}>
          <ShowMoreText
            style={styles.showMore}
            pageToNavigateTo={"ListingDetailsShowMoreDetailsScreen"}
            listingFromDB={listingFromDB}
            roomCount={listing.numRoomsAvailable}
          >
            Show More
          </ShowMoreText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  userContainer: {
    marginTop: 10,
  },

  titleContainer: {
    padding: 20,
    paddingTop: 0,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  showMoreContainer: {
    display: "flex",
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
