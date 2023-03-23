import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import listingsService from "../../services/listingsService";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";
import Screen from "../Screen";
import Card from "../Card";
import colors from "../../config/colors";

import { useNavigation } from "@react-navigation/native";

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
  isUserListing,
}) => {
  const navigation = useNavigation();

  const [offset, setOffset] = useState(0);
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
        response = await listingsService.getAllListings(offset);
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
          dateAdded: new Date(item.date_added).toLocaleDateString(),
          minRoomRent: item.minRoomRent,
          numRoomsAvailable: item.numRoomsAvailable,
          earliestRoomDateAvailable:
            item.earliestRoomDateAvailable &&
            new Date(item.earliestRoomDateAvailable) <= new Date()
              ? "Now"
              : item.earliestRoomDateAvailable,
          hasLivingRoom: item.hasLivingRoom,
          bathroomCount: item.bathroomCount,
        };

        return convertedListing;
      });
      setListings([...listings, ...convertedListings]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //Need this to initially load the listings
  useEffect(() => {
    getListings();
  }, [listings]);

  //Update the offset when the listings change
  useEffect(() => {
    setOffset(listings.length);
  }, [listings]);

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={styles.cardView}>
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
  screen: {
    backgroundColor: colors.light,
  },

  cardView: {
    padding: 15,
    shadowOffset: {
      width: 2,
      height: 2, // Add this line
    },
    shadowOpacity: 0.3, // Add this line
    shadowRadius: 5, // Add this line
  },
});
