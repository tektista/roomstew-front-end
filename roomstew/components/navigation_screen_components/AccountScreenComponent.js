import React from "react";

import { useNavigation } from "@react-navigation/native";

import Screen from "../Screen";
import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";
import Icon from "../Icon";
import colors from "../../config/colors";

// import Screen from "../../components/Screen";
// import ListItem from "../../components/ListItem";
// import ListItemSeparator from "../../components/ListItemSeparator";
// import Icon from "../../components/Icon";
// import colors from "../../config/colors";

import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "Saved Listings",
    icon: {
      name: "heart",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreenComponent({
  navigateToUserListingsName,
  navigateToUserSavedListingsScreenName,
}) {
  const navigation = useNavigation();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log("hello")}>
          <ListItem
            title="John Bautista"
            subTitle="john.bautista@email.com"
            image={require("../../assets/apartment.jpg")}
          ></ListItem>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigateToUserListingsName)}
        >
          <ListItem
            title={"My Listings"}
            IconComponent={
              <Icon
                name={"format-list-bulleted"}
                backgroundColor={colors.primary}
              />
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigateToUserSavedListingsScreenName)
          }
        >
          <ListItem
            title={"Saved Listings"}
            IconComponent={
              <Icon name={"heart"} backgroundColor={colors.primary} />
            }
          />
        </TouchableOpacity>
      </View>

      <ListItem
        title="Log out"
        ItemComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      ></ListItem>
    </Screen>
  );
}

export default AccountScreenComponent;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
