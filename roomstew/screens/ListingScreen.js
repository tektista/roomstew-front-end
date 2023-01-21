import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

import axios from "axios";

const ListingScreen = () => {
  const BASE_URI = "http://localhost:3002/api/listings";
  const [listings, setListings] = useState([]);

  const getListings = async () => {
    try {
      const response = await axios.get(`${BASE_URI}`);
      const newListings = response.data.map((item) => {
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          minRoomRent: item.minRoomRent,
          numRoomsAvailable: item.numRoomsAvailable,
          earliestRoomDateAvailable: new Date(
            item.earliestRoomDateAvailable
          ).toLocaleDateString(),
          dateAdded: new Date(item.dateAdded).toLocaleDateString(),
        };
      });
      setListings(newListings);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getListings();
  }, []);
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
              minRoomRent={item.minRoomRent}
              numRoomsAvailable={item.numRoomsAvailable}
              earliestRoomDateAvailable={item.earliestRoomDateAvailable}
              dateAdded={item.dateAdded}
            />
          );
        }}
      ></FlatList>
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

//from LISTING TABLE: title, image, dateAdded

/* 

Backend sends 10 listings to front-end
Backend should send for each listing -
  - the listing properties: title, image, dateAdded
  - information needed from other tables related to a listing: 
    - lowestRent (lowest room price for a listing),
    - roomsAvailable (number of rooms available for a listing),
    - dateAvailableFrom (date the room is available from)

*/

/* from ROOM TABLE: 
lowestRent (lowest room price for a listing), 
roomsAvailable (number of rooms available for a listing),
dateAvailableFrom (date the room is available from)
*/

//To calculate roomsAvailable, count the number of rooms associated with the listing
