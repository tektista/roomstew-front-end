import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";
import convertListingPropsVals from "../helpers/convertListingPropsVals";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ShowMoreText from "../components/ShowMoreText";
import ShowMoreDesc from "../components/ShowMoreDesc";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

import ListingDetailsScreenItems from "../config/ListingDetailsScreenItems";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params.item;

  //state of object pulled from axios

  const [listingFromDB, setListingFromDB] = useState({});

  //we need this to get the listing details from the server once the listing is clicked
  const getListingDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/listings/${listing.id}`
      );
      setListingFromDB(convertListingPropsVals(response.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  useEffect(() => {
    console.log("Here");
    console.log(listingFromDB);
  }, [listingFromDB]);

  return (
    <ScrollView>
      <Image style={styles.image} source={require("../assets/apartment.jpg")} />

      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/apartment.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        ></ListItem>
      </View>

      <View style={styles.titleContainer}>
        <AppText style={styles.title}>
          {listingFromDB.title} {listingFromDB.listing_id}
        </AppText>

        <AppText styles={styles.description}>
          {listingFromDB.description}
        </AppText>

        <View style={styles.showMoreContainer}>
          <ShowMoreDesc style={styles.showMore}>Show More</ShowMoreDesc>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        {ListingDetailsScreenItems.slice(0, 5).map((item) => (
          <View key={item.title}>
            <ListItem
              title={item.title}
              subTitle={
                item.title === "Rooms" && listing.numRoomsAvailable ? (
                  listing.numRoomsAvailable + " available"
                ) : (
                  <Text>{listingFromDB[item.listingFromDBName]}</Text>
                )
              }
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
            <ListItemSeparator />
          </View>
        ))}

        <View style={styles.showMoreContainer}>
          <ShowMoreText
            style={styles.showMore}
            pageToNavigateTo={"ListingDetailsShowMoreDetailsScreen"}
            listingFromDB={listingFromDB}
            roomCount={listing.numRoomsAvailable}
          >
            Show More
          </ShowMoreText>
        </View>
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
    marginTop: 10,
  },

  titleContainer: {
    padding: 20,
    paddingTop: 0,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },

  description: {},

  detailsContainer: {},

  showMoreContainer: {
    display: "flex",
    alignItems: "center",
  },

  showMore: {
    color: colors.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
