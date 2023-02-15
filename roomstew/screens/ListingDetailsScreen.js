import { Image, StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params.item;
  console.log(listing.id);

  //state of object pulled from axios

  const [listingFromDB, setListingFromDB] = useState({});

  const listingItems = [
    {
      title: "Rooms",
      icon: {
        name: "bed",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "Furnished",
      icon: {
        name: "table-chair",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "Bills",
      icon: {
        name: "home-lightning-bolt",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "Internet",
      icon: {
        name: "wifi",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "Living room",
      icon: {
        name: "sofa",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "Bathrooms",
      icon: {
        name: "toilet",
        backgroundColor: colors.primary,
      },
    },
  ];

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
      </View>

      <View style={styles.detailsContainer}>
        {listingItems.map((item) => (
          <View key={item.title}>
            <ListItem
              title={item.title}
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

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
