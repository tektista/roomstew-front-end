import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import listingsService from "../../services/listingsService";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";

import Screen from "../../components/Screen";
import CardUser from "../../components/CardUser";
import colors from "../../config/colors";

const UserListingsScreen = ({ navigation }) => {
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
      const response = await listingsService.getAllListingsByUserId(offset);

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
        };
      });
      setListings([...listings, ...newListings]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListings();
  }, [listings]);

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
            <CardUser
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

export default UserListingsScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 10,
    backgroundColor: colors.light,
  },
});
