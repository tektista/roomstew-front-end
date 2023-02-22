import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

import axios from "axios";

import convertListingPropsVals from "../../helpers/convertListingPropsVals";
import ListingDetailsScreenItems from "../../config/ListingDetailsScreenItems";

import colors from "../../config/colors";
import AppText from "../../components/AppText";
import ShowMoreText from "../../components/ShowMoreText";
import ShowMoreDesc from "../../components/ShowMoreDesc";

import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import Icon from "../../components/Icon";

export default function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params.item;

  //state of object pulled from axios

  const [listingFromDB, setListingFromDB] = useState({});
  const [photosFromListing, setPhotosFromListing] = useState([]);

  const images = [
    "https://images.pexels.com/photos/7438545/pexels-photo-7438545.jpeg",
    "https://images.pexels.com/photos/12996613/pexels-photo-12996613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6690827/pexels-photo-6690827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  //we need this to get the listing details from the server once the listing is clicked
  const getListingDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/listings/${listing.id}`
      );

      setListingFromDB(convertListingPropsVals(response.data[0][0]));

      const photoList = response.data[1];

      console.log(photoList);
      const photoDataList = [];

      photoList.forEach((photoObject) => {
        const base64Image = btoa(
          new Uint8Array(photoObject.listing_photo.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        photoDataList.push(`data:image/jpeg;base64,${base64Image}`);
      });

      setPhotosFromListing(photoDataList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  useEffect(() => {
    console.log(photosFromListing);
  }, [photosFromListing]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: photosFromListing[0] }} />

      {/* <Image
        style={styles.image}
        source={{
          uri: images[2],
        }}
      /> */}

      {/* <FlatList
        // horizontal={true}
        pagingEnabled={true}
        data={photosFromListing}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.image}>
            <Image style={styles.image} source={{ uri: images[1] }} />
          </View>
        )}
      ></FlatList> */}

      <View style={styles.userContainer}>
        <ListItem
          image={require("../../assets/apartment.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        ></ListItem>
      </View>

      <View style={styles.titleContainer}>
        <AppText style={styles.title}>
          {listingFromDB.title} {listingFromDB.listing_id}
        </AppText>

        <AppText style={styles.description}>
          {listingFromDB.description && listingFromDB.description.length > 256
            ? listingFromDB.description.slice(0, 256) + " ..."
            : listingFromDB.description}
        </AppText>

        <View style={styles.showMoreContainer}>
          <ShowMoreDesc
            style={styles.showMore}
            pageToNavigateTo={"ListingDetailsShowMoreDescScreen"}
            dataToPassToPage={listingFromDB.description}
          >
            Show More
          </ShowMoreDesc>

          {/* <Button
            title="Show More"
            onPress={() => {
              navigation.navigate("ListingDetailsShowMoreDescScreen", {
                listingDescription: listingFromDB.description,
              });
            }}
          /> */}
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
