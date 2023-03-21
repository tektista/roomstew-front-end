import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from "@env";

import { useNavigation, useRoute } from "@react-navigation/native";

const ListingMapScreenComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const listingAddress = {
    street_address: route.params.street_address,
    city: route.params.city,
    postcode: route.params.postcode,
  };

  const [listingLocation, setListingLocation] = useState(null);

  const getLatitudeAndLongitude = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${listingAddress.street_address},+${listingAddress.city},+${listingAddress.postcode}&key=${GOOGLE_MAPS_API_KEY}`
      );

      setListingLocation({
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLatitudeAndLongitude();
  }, []);

  useEffect(() => {
    console.log(listingLocation);
  }, [listingLocation]);

  return (
    <View style={styles.container}>
      {listingLocation && (
        <MapView style={styles.map} initialRegion={listingLocation}>
          <Marker coordinate={listingLocation} />
        </MapView>
      )}
    </View>
  );
};

export default ListingMapScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
