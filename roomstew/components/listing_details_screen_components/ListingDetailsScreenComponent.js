import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

import listingsService from "../../services/listingsService";
import roomsService from "../../services/roomsService";
import saveService from "../../services/saveService";
import moment from "moment";

import ListingDetailsScreenItems from "../../config/ListingDetailsScreenItems";
import AppForm from "../forms/AppForm";

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
import ExpoVectorIcon from "../ExpoVectorIcon";
import RoomAddFormModal from "../forms/RoomAddFormModal";
import RoomAddFormField from "../forms/RoomAddFormField";

const { width } = Dimensions.get("window");
const height = (width / 100) * 60;

import { useFocusEffect } from "@react-navigation/native";

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

  console.log("HERE");
  console.log(route.params);

  const [isLoading, setIsLoading] = useState(true);
  const [listingFromDB, setListingFromDB] = useState({});
  const [listingPhotosFromDB, setListingPhotosFromDB] = useState([]);
  const [listingRoomsCardDetailsFromDB, setListingRoomCardDetailsListFromDB] =
    useState([]);
  const [listingIsSaved, setListingIsSaved] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //TO DO: only fetch if prop "update" has been passed
  useFocusEffect(
    React.useCallback(() => {
      getListingDetails();
    }, [])
  );
  const getListingDetails = async () => {
    setIsLoading(true);
    try {
      const response = await listingsService.getAListingById(listing.id);
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
    } finally {
      setIsLoading(false);
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
      console.log(err);
    }
  };

  const handleSaveUnsaveListing = async () => {
    try {
      if (listingIsSaved) {
        await saveService.deleteASavedListingByUserAndListingId(
          listingFromDB.listing_id
        );
      } else {
        await saveService.saveAListingByUserAndListingId(
          listingFromDB.listing_id
        );
      }
      setListingIsSaved(!listingIsSaved);
    } catch (err) {
      console.error("Error saving/un-saving listing:", err);
    }
  };

  const handleRoomDelete = async (roomId) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this room?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const response = await roomsService.deleteARoomById(roomId);
            console.log(response);

            if (response.status === 200) {
              Alert.alert("Success", "Room deleted successfully", [
                { text: "OK", onPress: () => getListingDetails() },
              ]);
            }
          },
        },
      ]
    );
  };

  const handleRoomAdd = async (id, values) => {
    const { roomImageList, ...newRoomObj } = values;
    const base64ImageList = roomImageList;

    const photoObjList = base64ImageList.map((base64Data, index) => {
      return {
        room_photo: base64Data,
        room_photo_order: index,
      };
    });

    const roomDataObj = {
      roomObj: newRoomObj,
      roomPhotoObjList: photoObjList,
    };

    try {
      const response = await roomsService.createARoomByListingId(
        id,
        roomDataObj
      );

      if (response.status === 200) {
        Alert.alert("Success", "Room succesfully added", [
          { text: "OK", onPress: () => getListingDetails() },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  useEffect(() => {
    checkIfListingIsSaved();
  }, [listingFromDB]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={{ flexGrow: 1 }}>
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
            onPress={() => {
              navigation.navigate(navigateToMapScreenName, {
                street_address: listingFromDB.street_address,
                city: listingFromDB.city,
                postcode: listingFromDB.postcode,
              });
            }}
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
        <View style={{ flexDirection: "row" }}>
          <View style={{ padding: 2 }}>
            <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
              Rooms
            </AppText>
          </View>

          {isUserListing && (
            <TouchableOpacity
              style={{ padding: 2 }}
              onPress={() => setModalVisible(true)}
            >
              <ExpoVectorIcon family="f" name="plus-circle" />
            </TouchableOpacity>
          )}
        </View>

        <RoomAddFormModal
          modalVisible={modalVisible}
          handleModalClose={(value) => setModalVisible(value)}
          handleRoomSubmit={(values) => handleRoomAdd(listing.id, values)}
        />

        <RoomScrollView
          isUserListing={isUserListing}
          formattedRoomDetailsList={listingRoomsCardDetailsFromDB}
          onPress={(roomObj) =>
            navigation.navigate(navigateToRoomDetailsScreenName, roomObj)
          }
          onPressEdit={(roomObj) => {
            console.log("ListingId in navigate:", listing);
            navigation.navigate("UserListingUpdateRoomScreen", {
              listing: listing,
              roomObj: roomObj,
            });
          }}
          onPressDelete={(roomObj) => handleRoomDelete(roomObj)}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
