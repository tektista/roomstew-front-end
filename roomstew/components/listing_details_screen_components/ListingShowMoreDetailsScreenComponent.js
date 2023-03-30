import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import ListingDetailsScreenItems from "../../config/ListingDetailsScreenItems";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import ListItemList from "../../components/ListItemList";
import ListItemSeparator from "../../components/ListItemSeparator";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppText from "../AppText";

const ListingShowMoreDetailsScreenComponent = () => {
  const route = useRoute();

  const listingFromDB = route.params.listingFromDB;
  const listing = route.params.listing;

  return (
    <ScrollView>
      <AppText style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
        Property Details
      </AppText>

      <View style={styles.detailsContainer}>
        <ListItemList
          objFromDB={listingFromDB}
          s
          localObj={listing}
          items={ListingDetailsScreenItems}
          sliceAtIndex={0}
          sliceToIndex={10}
        />

        <View style={styles.showMoreContainer}></View>
      </View>
    </ScrollView>
  );
};

export default ListingShowMoreDetailsScreenComponent;

const styles = StyleSheet.create({});
