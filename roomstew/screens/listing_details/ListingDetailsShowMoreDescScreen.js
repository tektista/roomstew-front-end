import { StyleSheet, ScrollView } from "react-native";
import React from "react";

import AppText from "../../components/AppText";

const ListingDetailsShowMoreDescScreen = ({ route }) => {
  const listingDescription = route.params.listingDescription;
  return (
    <ScrollView>
      <AppText style={styles.descriptionContainer}>
        {listingDescription}
      </AppText>
    </ScrollView>
  );
};

export default ListingDetailsShowMoreDescScreen;

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 10,
  },
});
