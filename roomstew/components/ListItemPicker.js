import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import Screen from "./Screen";

import Icon from "./Icon";

import AppText from "./AppText";
import colors from "../config/colors";
import PickerItem from "./PickerItem";

import ListItemSeparator from "./ListItemSeparator";

export default function ListItemPicker({
  title,
  image,
  initialSubTitle,
  IconComponent,
  items,
  onSelectItemSetFieldValue,
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [subTitle, setSubTitle] = useState(initialSubTitle);

  return (
    <>
      <TouchableOpacity
        underlayColor={colors.light}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.container}>
          <View style={styles.detailsWrapper}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}

            <View style={styles.detailsContainer}>
              <AppText style={styles.title}> {title}</AppText>

              {/* <AppText style={styles.subTitle}>{subTitleProp}</AppText> */}

              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>

          <View style={styles.iconRightConainter}>
            <Icon
              name="chevron-down"
              size={40}
              iconColor={colors.dark}
              backgroundColor={colors.white}
              style={styles}
            />
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  setSubTitle(item.subTitle);
                  onSelectItemSetFieldValue(item.value);

                  //for handling the age picker item (LAZY FIX)
                  if (onSelectItem) {
                    onSelectItem(item.value);
                  }
                }}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,

    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
    width: "74%",
  },

  detailsWrapper: {
    flexDirection: "row",
  },

  iconRightConainter: {
    position: "absolute",
    right: 6,
  },
});
