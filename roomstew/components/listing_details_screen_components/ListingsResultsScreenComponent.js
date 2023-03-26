import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import listingsService from "../../services/listingsService";
import convertPhotoListForFrontEnd from "../../helpers/convertPhotoListForFrontEnd";
import Screen from "../Screen";
import Card from "../Card";
import colors from "../../config/colors";
import AppText from "../AppText";
const moment = require("moment");

import { useFocusEffect } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  navigateToEditScreenName = "UserListingUpdatePrefsScreen",
  isUserListing,
}) => {
  const navigation = useNavigation();
  const route = useRoute();

  let cityToSearch;
  let minRoomsAvailable;
  let minRent;
  let maxRent;

  if (searchOrSavedOrUser === "search") {
    cityToSearch = route.params.values.cityToSearch;

    // minRoomsAvailable = parseInt(route.params.values.minRoomsAvailable);
    // minRent = parseInt(route.params.values.minRent);
    // maxRent = parseInt(route.params.values.maxRent);

    minRoomsAvailable = route.params.values.minRoomsAvailable;
    minRent = route.params.values.minRent;
    maxRent = route.params.values.maxRent;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [fetchMore, setFetchMore] = useState(false);
  const [listings, setListings] = useState([]);

  const handleFilterPress = () => {
    navigation.goBack();
  };

  const handleEndReached = () => {
    setFetchMore(true);
  };

  const getListings = async () => {
    try {
      let response;

      if (searchOrSavedOrUser === "search") {
        response = await listingsService.getAllListings(
          offset,
          cityToSearch,
          minRoomsAvailable,
          minRent,
          maxRent
        );
        //always just load from beginning
      } else if (searchOrSavedOrUser === "user") {
        response = await listingsService.getAllListingsByUserId(0);
      } else if (searchOrSavedOrUser === "saved") {
        //always just load from beginning
        response = await listingsService.getAllListingsByListingIds(0);
      }

      const convertedListings = response.data.map((item) => {
        const convertedListing = {
          id: item.listing_id,
          listingPhoto: convertPhotoListForFrontEnd(
            item.listingPhotoRows,
            "listing_photo"
          ),
          title: item.title,
          city: item.city,
          streetAddress: item.street_address,
          postcode: item.postcode,
          dateAdded: moment(new Date(item.listing_create_date)).format("MMM D"),
          minRoomRent: item.minRoomRent,
          numRoomsAvailable: item.numRoomsAvailable,
          earliestRoomDateAvailable:
            item.earliestRoomDateAvailable &&
            new Date(item.earliestRoomDateAvailable) <= new Date()
              ? "Now"
              : moment(new Date(item.earliestRoomDateAvailable)).format(
                  "MMMM D"
                ),
          hasLivingRoom: item.hasLivingRoom,
          bathroomCount: item.bathroomCount,
        };

        return convertedListing;
      });

      if (searchOrSavedOrUser === "saved" || searchOrSavedOrUser === "user") {
        setListings(convertedListings);
      } else {
        const newUniqueListings = convertedListings.filter(
          (newListing) =>
            !listings.some((oldListing) => oldListing.id === newListing.id)
        );
        setListings([...listings, ...newUniqueListings]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleListingDelete = async (listingId) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this listing?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            setIsLoading(true);
            try {
              const response = await listingsService.deleteAListingById(
                listingId
              );

              if (response.status === 200) {
                setIsLoading(false);

                //Do this locally
                const updatedListings = listings.filter(
                  (listing) => listing.id !== listingId
                );
                setListings(updatedListings);

                Alert.alert("Success", "Listing deleted successfully", [
                  { text: "OK" },
                ]);
              }
            } catch (err) {
              console.log(err);
            } finally {
              setIsLoading(false);
            }
          },
        },
      ]
    );
  };

  //Mount
  // useEffect(() => {
  //   getListings();
  // }, []);

  //TO DO: only fetch if prop "update" has been passed
  useFocusEffect(
    React.useCallback(() => {
      getListings();
    }, [])
  );

  //Everytime fetchMore changes, check if its true, if it is fetch more
  useEffect(() => {
    if (fetchMore) {
      getListings();
      setFetchMore(false);
    }
  }, [fetchMore]);

  useEffect(() => {
    setOffset(listings.length);
  }, [listings]);

  useEffect(() => {}, [offset]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <Screen style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
          width: "100%",
        }}
      >
        {searchOrSavedOrUser === "search" && (
          <>
            {cityToSearch || minRoomsAvailable || minRent || maxRent ? (
              <TouchableOpacity onPress={() => handleFilterPress()}>
                <AppText
                  style={{
                    textDecorationLine: "underline",
                    color: colors.primary,
                  }}
                >
                  Filters:
                  {cityToSearch && ` ${cityToSearch}`}
                  {minRoomsAvailable > 0 &&
                    `, ${minRoomsAvailable} available rooms`}
                  {minRent > 0 && `, £${minRent} min`}
                  {maxRent > 0 && `, £${maxRent} max`}
                </AppText>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleFilterPress()}>
                <AppText
                  style={{
                    textDecorationLine: "underline",
                    color: colors.primary,
                  }}
                >
                  No filters
                </AppText>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>

      {listings.length === 0 && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AppText> No listings found :( </AppText>
        </View>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        extraData={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
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
                  item.listingPhoto.length > 0
                    ? item.listingPhoto[0].dataUrl
                    : ""
                }
                hasLivingRoom={item.hasLivingRoom}
                bathroomCount={item.bathroomCount}
                isUserListing={isUserListing}
                onPress={() => {
                  navigation.navigate(navigateToScreenName, { item });
                }}
                onPressDelete={() => handleListingDelete(item.id)}
                onPressEdit={() =>
                  navigation.navigate(navigateToEditScreenName, { item })
                }
              />
            </View>
          );
        }}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.9}
        contentContainerStyle={{ flexGrow: 1 }}
      ></FlatList>
    </Screen>
  );
};

export default ListingsResultsScreenComponent;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },

  cardContainer: {
    padding: 15,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
