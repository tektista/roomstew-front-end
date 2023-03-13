import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

import axios from "axios";

//As this screen is listed in ListingsNavigator which is also a child of AppNavigator, we can use the navigation prop
const ListingsScreen = ({ navigation }) => {
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [listings, setListings] = useState([]);

  const handleEndReached = () => {
    console.log("end reached");
    setOffset(offset + 1);
  };

  const getListings = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3002/api/listings?offset=${offset}`
        // `https://nodejs-cleardb-project.herokuapp.com/api/listings/?offset=${offset}`
      );

      const newListings = response.data.map((item) => {
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          city: item.city,
          streetAddress: item.streetAddress,
          postcode: item.postcode,
          minRoomRent: item.minRoomRent,
          numRoomsAvailable: item.numRoomsAvailable,
          earliestRoomDateAvailable: new Date(
            item.earliestRoomDateAvailable
          ).toLocaleDateString(),
          dateAdded: new Date(item.dateAdded).toLocaleDateString(),
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
  }, [offset]);

  return (
    <Screen style={styles.screen}>
      <FlatList
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
    padding: 20,
    backgroundColor: colors.light,
  },
});
