import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";

import colors from "../config/colors";

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

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log("hello")}>
          <ListItem
            title="John Bautista"
            subTitle="john.bautista.2018@uni.strath.ac.uk"
            image={require("../assets/apartment.jpg")}
          ></ListItem>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserListingsScreen")}
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
          onPress={() => navigation.navigate("SavedListingsScreen")}
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

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
