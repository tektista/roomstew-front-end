import { StyleSheet, ScrollView } from "react-native";
import React from "react";

import AppText from "../AppText";

import { useRoute, useNavigation } from "@react-navigation/native";

const ListingShowMoreDescriptionScreenComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const listingDescription = route.params.listingDescription;
  return (
    <ScrollView>
      <AppText style={styles.descriptionContainer}>
        {listingDescription}
      </AppText>
    </ScrollView>
  );
};

export default ListingShowMoreDescriptionScreenComponent;

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 10,
  },
});
