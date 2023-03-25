import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import listingsService from "../../services/listingsService";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";
import Screen from "../Screen";
import Card from "../Card";
import colors from "../../config/colors";
const moment = require("moment");

import { useNavigation, useRoute } from "@react-navigation/native";

/*
When end is reached, we want to get the next listing based on the offset
We also need to keep a track of the offset so it is always updated

1. Page loads, offset = 0, listings.length = 1,

No listings so end reached
get listings, then set the offset to the length of the listings array
2. End reached, offset = 2, listings.length = 2
*/
const ListingsResultsScreenComponent = ({
  searchOrSavedOrUser = "search",
  navigateToScreenName = "",
  navigateToEditScreenName = "UserListingUpdatePrefsScreen",
  isUserListing,
}) => {
  const navigation = useNavigation();
  const route = useRoute();

  let cityToSearch;
  let minRoomsAvailable;
  let minRent;
  let maxRent;

  if (searchOrSavedOrUser === "search") {
    cityToSearch = route.params.values.cityToSearch;
    minRoomsAvailable = route.params.values.minRoomsAvailable;
    minRent = parseInt(route.params.values.minRent);
    maxRent = parseInt(route.params.values.maxRent);
  }

  const [offset, setOffset] = useState(0);
  const [isScreenLoading, setIsScreenLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [listings, setListings] = useState([]);

  const handleEndReached = () => {
    console.log("end reached");
    getListings();
  };

  const getListings = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      let response;

      if (searchOrSavedOrUser === "search") {
        console.log("cityToSearch", cityToSearch);
        response = await listingsService.getAllListings(
          offset,
          cityToSearch,
          minRoomsAvailable,
          minRent,
          maxRent
        );
      } else if (searchOrSavedOrUser === "user") {
        response = await listingsService.getAllListingsByUserId(offset);
      } else if (searchOrSavedOrUser === "saved") {
        response = await listingsService.getAllListingsByListingIds(offset);
      }

      const convertedListings = response.data.map((item) => {
        const convertedListing = {
          id: item.listing_id,
          listingPhoto: convertPhotoListForFrontEnd(
            item.listingPhotoRows,
            "listing_photo"
          ),
          title: item.title,
          city: item.city,
          streetAddress: item.street_address,
          postcode: item.postcode,
          dateAdded: moment(new Date(item.listing_create_date)).format("MMM D"),
          minRoomRent: item.minRoomRent,
          numRoomsAvailable: item.numRoomsAvailable,
          earliestRoomDateAvailable:
            item.earliestRoomDateAvailable &&
            new Date(item.earliestRoomDateAvailable) <= new Date()
              ? "Now"
              : moment(new Date(item.earliestRoomDateAvailable)).format(
                  "MMMM D"
                ),
          hasLivingRoom: item.hasLivingRoom,
          bathroomCount: item.bathroomCount,
        };

        return convertedListing;
      });
      setListings([...listings, ...convertedListings]);
      setIsScreenLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleListingDelete = async (listingId) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this listing?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              const response = await listingsService.deleteAListingById(
                listingId
              );
              console.log(response);

              if (response.status === 200) {
                Alert.alert("Success", "Listing deleted successfully", [
                  { text: "OK", onPress: () => getListings() },
                ]);
              }
            } catch (err) {
              console.log(err);
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    getListings();
  }, [listings]);

  useEffect(() => {
    setOffset(listings.length);
  }, [listings]);

  useEffect(() => {
    getListings();
    setOffset(listings.length);
  }, []);

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  if (isScreenLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={styles.cardContainer}>
              <Card
                title={item.title}
                image={item.image}
                streetAddress={item.streetAddress}
                city={item.city}
                postcode={item.postcode}
                minRoomRent={item.minRoomRent}
                numRoomsAvailable={item.numRoomsAvailable}
                earliestRoomDateAvailable={item.earliestRoomDateAvailable}
                dateAdded={item.dateAdded}
                dataUrl={
                  item.listingPhoto.length > 0
                    ? item.listingPhoto[0].dataUrl
                    : ""
                }
                hasLivingRoom={item.hasLivingRoom}
                bathroomCount={item.bathroomCount}
                isUserListing={isUserListing}
                onPress={() => {
                  navigation.navigate(navigateToScreenName, { item });
                }}
                onPressDelete={() => handleListingDelete(item.id)}
                onPressEdit={() =>
                  navigation.navigate(navigateToEditScreenName, { item })
                }
              />
            </View>
          );
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.9}
      ></FlatList>
    </Screen>
  );
};

export default ListingsResultsScreenComponent;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.light,
  },

  cardContainer: {
    padding: 15,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
