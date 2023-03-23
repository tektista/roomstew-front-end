import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

import listingsService from "../../services/listingsService";
import saveService from "../../services/saveService";

import ListingDetailsScreenItems from "../../config/ListingDetailsScreenItems";

import convertListingForFrontEnd from "../../helpers/convertListingForFrontEnd";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";
import convertRoomObjListForCards from "../../helpers/convertRoomObjListForCards";

import colors from "../../config/colors";
import AppText from "../../components/AppText";
import ShowMoreDetails from "../../components/ShowMoreDetails";
import ShowMoreDesc from "../../components/ShowMoreDesc";

import SaveButton from "../../components/SaveButton";
import LocationButton from "../../components/LocationButton";
import PhotoScrollView from "../../components/PhotoScrollView";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import Icon from "../../components/Icon";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import RoomScrollView from "../../components/RoomScrollView";
import Description from "../../components/Description";
import ListItemList from "../../components/ListItemList";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const height = (width / 100) * 60;

//I would need to reuse

/*
  
  if they unsave, delete the row in the db, where the user id and listing id match
  re render component to show the save button status
  
  if they save, add a row to the db with the user_id and listing listng id,
  re render componenn to show the unsave button status
  
  */

export default function ListingDetailsScreenComponent({
  navigateToMapScreenName,
  navigateToRoomDetailsScreenName,
  navigateToShowMoreDescScreenName,
  navigateToShowMoreDetailsScreenName,
  isUserListing,
}) {
  const navigation = useNavigation();
  const route = useRoute();

  const listing = route.params.item;

  const [listingFromDB, setListingFromDB] = useState({});
  const [listingPhotosFromDB, setListingPhotosFromDB] = useState([]);
  const [listingRoomsCardDetailsFromDB, setListingRoomCardDetailsListFromDB] =
    useState([]);
  const [listingIsSaved, setListingIsSaved] = useState(false);

  //Get
  const getListingDetails = async () => {
    try {
      const response = await listingsService.getAListingById(listing.id);
      console.log(response.data);
      setListingFromDB(convertListingForFrontEnd(response.data.listingObj[0]));
      setListingPhotosFromDB(
        convertPhotoListForFrontEnd(
          response.data.listingPhotoObjList,
          "listing_photo"
        )
      );
      setListingRoomCardDetailsListFromDB(
        convertRoomObjListForCards(response.data.listingRoomCardDetailsList)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfListingIsSaved = async () => {
    try {
      const response = await saveService.getSavedListingIdsByUserId(listing.id);
      const saveQueryRows = response.data;

      setListingIsSaved(
        saveQueryRows.some(
          (obj) => obj.listing_listing_id === listingFromDB.listing_id
        )
      );
    } catch (err) {
      throw err;
    }
  };

  const handleSaveUnsaveListing = async () => {
    try {
      if (listingIsSaved) {
        // Unsave the listing
        await saveService.deleteASavedListingByUserAndListingId(
          listingFromDB.listing_id
        );
      } else {
        // Save the listing
        await saveService.saveAListingByUserAndListingId(
          listingFromDB.listing_id
        );
      }
      // Toggle listingIsSaved state
      setListingIsSaved(!listingIsSaved);
    } catch (err) {
      console.error("Error saving/un-saving listing:", err);
    }
  };

  //Mount
  useEffect(() => {
    getListingDetails();
  }, []);

  //once listingFromDB is set, check if listing is saved
  useEffect(() => {
    checkIfListingIsSaved();
  }, [listingFromDB]);

  return (
    <ScrollView>
      <PhotoScrollView photoObjListWIthDataUrl={listingPhotosFromDB} />

      <View style={styles.userContainer}>
        <ListItem
          image={require("../../assets/apartment.jpg")}
          title="John Bautista"
          subTitle="5 Listings"
        ></ListItem>

        {/* LOCATION BUTTON */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          {/* SAVE BUTTON */}

          {isUserListing !== true && (
            <View style={{ padding: 20 }}>
              <SaveButton
                isSaved={listingIsSaved}
                onPress={handleSaveUnsaveListing}
              />
            </View>
          )}
        </View>
      </View>

      {/* ADDRESS CONTAINER */}
      <View style={{ padding: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <LocationButton
            color={colors.black}
            onPress={() =>
              navigation.navigate(navigateToMapScreenName, {
                street_address: listingFromDB.street_address,
                city: listingFromDB.city,
                postcode: listingFromDB.postcode,
              })
            }
          >
            <View>
              <AppText style={{ textDecorationLine: "underline" }}>
                {listingFromDB.street_address}, {listingFromDB.city},{" "}
                {listingFromDB.postcode}
              </AppText>
            </View>
          </LocationButton>
        </View>
      </View>

      {/* MAIN DETAILS CONTAINER */}
      <View style={styles.descriptionContainer}>
        <AppText style={styles.title}>
          {listingFromDB.title} {listingFromDB.listing_id}
        </AppText>

        <Description description={listingFromDB.description} />

        <View style={styles.showMoreContainer}>
          <ShowMoreDesc
            style={styles.showMore}
            description={listingFromDB.description}
            onPress={() =>
              navigation.navigate(navigateToShowMoreDescScreenName, {
                listingDescription: listingFromDB.description,
              })
            }
          >
            Show More
          </ShowMoreDesc>
        </View>

        {/* ROOM CARD SCROLL VIEW*/}
        <RoomScrollView
          formattedRoomDetailsList={listingRoomsCardDetailsFromDB}
          onPress={(roomObj) =>
            navigation.navigate(navigateToRoomDetailsScreenName, roomObj)
          }
        />
      </View>

      {/* AMENITIES */}
      <View style={styles.detailsContainer}>
        <View style={{ padding: 10, paddingBottom: 0 }}>
          <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
            Property Details{" "}
            <ShowMoreDetails
              style={styles.showMore}
              onPress={() => {
                navigation.navigate(navigateToShowMoreDetailsScreenName, {
                  listingFromDB: listingFromDB,
                  listing: listing,
                });
              }}
            >
              Show More
            </ShowMoreDetails>
          </AppText>
        </View>

        <ListItemList
          objFromDB={listingFromDB}
          localObj={listing}
          items={ListingDetailsScreenItems}
          sliceAtIndex={0}
          sliceToIndex={5}
        />

        <ListItemSeparator />

        <View style={{ padding: 10, paddingBottom: 0 }}>
          <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
            Roommate Preferences
          </AppText>
        </View>

        <ListItemList
          objFromDB={listingFromDB}
          items={ListingDetailsScreenItems}
          sliceAtIndex={8}
          sliceToIndex={14}
        />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  saveContainer: {
    padding: 20,
  },

  descriptionContainer: {
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  showMoreContainer: {
    display: "flex",

    alignItems: "flex-start",
    marginBottom: 10,
  },

  showMore: {
    color: colors.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

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
