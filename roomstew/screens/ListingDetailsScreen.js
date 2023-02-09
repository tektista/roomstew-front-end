import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/apartment.jpg")} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>3 Bed Flat available</AppText>
        <AppText style={styles.price}> 650</AppText>

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
