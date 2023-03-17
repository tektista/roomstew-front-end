import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import ListingDetailsScreenItems from "../../config/ListingDetailsScreenItems";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";

const ListingDetailsShowMoreDetailsScreen = ({ route }) => {
  const listingFromDB = route.params.listingFromDB;
  const roomCount = route.params.roomCount;

  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        {ListingDetailsScreenItems.slice(0, 8).map((item) => (
          <View key={item.title}>
            <ListItem
              title={item.title}
              subTitle={
                item.title === "Rooms" && roomCount ? (
                  roomCount + " available"
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

        <View style={styles.showMoreContainer}></View>
      </View>
    </ScrollView>
  );
};

export default ListingDetailsShowMoreDetailsScreen;

const styles = StyleSheet.create({});
