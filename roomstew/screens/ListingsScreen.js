import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import listingsService from "../services/listingsService";
import convertPhotoListForFrontEnd from "../helpers/convertPhotoListForFrontEnd";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

/*
When end is reached, we want to get the next listing based on the offset
We also need to keep a track of the offset so it is always updated

1. Page loads, offset = 0, listings.length = 1,

No listings so end reached
get listings, then set the offset to the length of the listings array
2. End reached, offset = 2, listings.length = 2
*/
const ListingsScreen = ({ navigation }) => {
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
      const response = await listingsService.getAllListings(offset);

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
              // saved={item.saved}
              //We use the navigation prop to navigate to the ListingDetails screen

              /* pass the listing to the listing details screen, where we can use the id
              to get the listing details from the database, which we can then display

              */
              onPress={() => {
                navigation.navigate("ListingDetails", { item });
              }}
            />
          );
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      ></FlatList>
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    backgroundColor: colors.light,
  },
});
