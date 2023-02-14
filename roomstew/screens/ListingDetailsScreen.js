import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params.item;
  console.log(listing.id);

  //state of object pulled from axios

  const [listingFromDB, setListingFromDB] = useState({});

  //we need this to get the listing details from the server once the listing is clicked
  const getListingDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/listings/${listing.id}`
      );
      setListingFromDB(response.data[0]);
      console.log(listingFromDB);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  return (
    <View>
      <Image style={styles.image} source={require("../assets/apartment.jpg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
          {listingFromDB.title} {listingFromDB.listing_id}
        </AppText>

        {/* <AppText style={styles.price}>£{listing.minRoomRent} </AppText> */}

        <AppText styles={styles.description}>
          {listingFromDB.description}
        </AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/apartment.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

/* Description: This is the listing details screen for each listing which
should display the details of each listing on press from the listings screen
*/
