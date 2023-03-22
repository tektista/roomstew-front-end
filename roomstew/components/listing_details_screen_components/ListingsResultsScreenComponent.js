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
  console.log(searchOrSavedOrUser);
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

      const newListings = response.data.map((item) => {
        return {
          id: item.id,
          listingPhoto: convertPhotoListForFrontEnd(
            item.listingPhoto,
            "listing_photo"
          ),
          title: item.title,
          city: item.city,
          streetAddress: item.streetAddress,
          postcode: item.postcode,
          minRoomRent: item.minRoomRent,
          numRoomsAvailable: item.numRoomsAvailable,
          earliestRoomDateAvailable: item.earliestRoomDateAvailable,
          dateAdded: item.dateAdded,
          // saved: item.saved,
        };
      });
      setListings([...listings, ...newListings]);
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
          return (
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
                item.listingPhoto.length > 0 ? item.listingPhoto[0].dataUrl : ""
              }
              isUserListing={isUserListing}
              //   CHANGE TOCallback function to pass data to the next screen
              onPress={() => {
                navigation.navigate(navigateToScreenName, { item });
              }}
            />
          );
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.7}
      ></FlatList>
    </Screen>
  );
};

export default ListingsResultsScreenComponent;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    backgroundColor: colors.light,
  },
});
