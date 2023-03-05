import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
  Text,
} from "react-native";
import React, { useState } from "react";

import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

import Screen from "./Screen";
import Icon from "./Icon";

import AppText from "./AppText";
import colors from "../config/colors";
import PickerItem from "./PickerItem";
import ListItemSeparator from "./ListItemSeparator";

export default function ListItemDatePicker({
  title,
  subTitle,
  image,
  IconComponent,
  onSelectItem,
  onSelectItemSetFieldValue,
  maxDate,
  minDate,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [datePickerValue, setDatePickerValue] = useState("");

  const calendarStartDate = getToday();

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
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle} </AppText>
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
          <View>
            <Button title="close" onPress={() => setModalVisible(false)} />

            {maxDate ? (
              <DatePicker
                mode="calendar"
                minimumDate={minDate}
                maximumDate={maxDate}
                selected={datePickerValue}
                onDateChange={(propDate) => {
                  setDatePickerValue(propDate);
                  onSelectItemSetFieldValue(propDate);
                  onSelectItem(propDate);
                  setModalVisible(false);
                }}
              />
            ) : (
              <DatePicker
                mode="calendar"
                minimumDate={minDate}
                selected={datePickerValue}
                onDateChange={(propDate) => {
                  setDatePickerValue(propDate);
                  onSelectItemSetFieldValue(propDate);
                  onSelectItem(propDate);
                  setModalVisible(false);
                }}
              />
            )}
          </View>
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
  },

  detailsWrapper: {
    flexDirection: "row",
  },

  iconRightConainter: {
    position: "absolute",
    right: 6,
  },
});
