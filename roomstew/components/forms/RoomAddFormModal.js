import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { getFormatedDate } from "react-native-modern-datepicker";
import * as Yup from "yup";

import Screen from "../Screen";
import AppForm from "./AppForm";
import TextInputFormField from "./TextInputFormField";
import CheckboxFormField from "./CheckboxFormField";
import ListItemPickerFormField from "./ListItemPickerFormField";
import ImagePickerFormField from "./ImagePickerFormField";
import DatePickerFormFieldField from "./DatePickerFormField";
import ListItemSeparator from "../ListItemSeparator";
import FormSubmitButton from "./FormSubmitButton";

import AppText from "../AppText";
import Icon from "../Icon";
import colors from "../../config/colors";

const RoomAddFormModal = ({
  modalVisible,
  handleModalClose,
  handleRoomSubmit,
}) => {
  const validationSchema = Yup.object().shape({
    room_description: Yup.string().required().min(1).label("Description"),
    rent: Yup.number().required().label("Rent per month").min(1),
    room_deposit: Yup.number().required().label("Deposit").min(1),
    room_images: Yup.array()
      .min(1, "Please select at least one image.")
      .max(8, "Maximum of 8 images allowed."),
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("No end date");
  const [roomSize, setRoomSize] = useState("Single room");
  const [roomFloor, setRoomFloor] = useState(0);

  const roomSizePickerItems = [
    {
      label: "",
      value: "Single room",
    },
    {
      label: "",
      value: "Double room",
    },
  ];

  const roomFloorPickerItems = [];
  for (let floor = 0; floor < 100; floor++) {
    let floorObj = {
      label: "",
      value: floor,
    };
    roomFloorPickerItems.push(floorObj);
  }

  return (
    <Modal visible={modalVisible} animationType="slide">
      <Screen>
        <ScrollView>
          <Button
            title="Close"
            style={styles.button}
            onPress={() => handleModalClose(false)}
          />
          <View>
            <AppText style={styles.formTitle}> Add Room Details </AppText>
          </View>

          <View style={styles.appFormContainer}>
            <AppForm
              initialValues={{
                room_description: "",
                rent: 0,
                room_deposit: 0,
                start_date: getFormatedDate(startDate, "YYYY-MM-DD"),
                end_date: endDate,

                room_size: 0,
                is_desk: false,
                is_en_suite: false,
                is_boiler: false,
                floor: 0,
                room_is_furnished: false,
                room_images: [],
              }}
              onSubmit={(values) => {
                console.log(values);
                handleRoomSubmit(values);
                handleModalClose(false);
              }}
              validationSchema={validationSchema}
            >
              <ImagePickerFormField name="room_images" />

              <TextInputFormField
                maxLength={512}
                autoCapitalize="none"
                autoCorrect={false}
                icon="description"
                keyboardType="default"
                name="room_description"
                placeholder="Description"
                multiline={true}
              />

              <TextInputFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="attach-money"
                keyboardType="numeric"
                name="rent"
                placeholder="Rent per month"
              />

              <TextInputFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="attach-money"
                keyboardType="numeric"
                name="room_deposit"
                placeholder="Deposit"
              />

              <ListItemSeparator />

              <DatePickerFormFieldField
                name="start_date"
                title="Start Date"
                subTitle={getFormatedDate(startDate, "DD-MM-YYYY")}
                IconComponent={
                  <Icon name="calendar" backgroundColor={colors.primary} />
                }
                minDate={getFormatedDate(startDate, "YYYY-MM-DD")}
                maxDate={
                  endDate === "No end date"
                    ? getFormatedDate(
                        new Date(
                          startDate.getFullYear(),
                          startDate.getMonth() + 6,
                          startDate.getDate()
                        ),
                        "YYYY-MM-DD"
                      )
                    : getFormatedDate(endDate, "YYYY-MM-DD")
                }
                onSelectItem={(value) => {
                  const newStartDate = new Date(value);
                  newStartDate.setMonth(newStartDate.getMonth());
                  setStartDate(newStartDate);
                }}
              />

              <ListItemSeparator />

              <DatePickerFormFieldField
                name="end_date"
                title="End Date"
                subTitle={
                  endDate === "No end date"
                    ? endDate
                    : getFormatedDate(endDate, "DD-MM-YYYY")
                }
                IconComponent={
                  <Icon name="calendar" backgroundColor={colors.primary} />
                }
                //min end date should be the max
                minDate={getFormatedDate(startDate, "YYYY-MM-DD")}
                // there should be no max end date

                onSelectItem={(value) => {
                  setEndDate(new Date(value));
                }}
              />
              <ListItemSeparator />

              <ListItemPickerFormField
                name="room_size"
                title="Room Size"
                subTitle={roomSize}
                IconComponent={
                  <Icon
                    name="image-size-select-small"
                    backgroundColor={colors.primary}
                  />
                }
                items={roomSizePickerItems}
                onSelectItem={(item) => setRoomSize(item)}
              />
              <ListItemPickerFormField
                name="floor"
                title="Room Floor"
                subTitle={roomFloor.toString()}
                IconComponent={
                  <Icon
                    name="image-size-select-small"
                    backgroundColor={colors.primary}
                  />
                }
                items={roomFloorPickerItems}
                onSelectItem={(item) => setRoomFloor(item)}
              />
              <ListItemSeparator />
              <CheckboxFormField
                name="is_furnished"
                title={"Furnished"}
                IconComponent={
                  <Icon name="table-chair" backgroundColor={colors.primary} />
                }
              />
              <ListItemSeparator />
              <CheckboxFormField
                name="is_en_suite"
                title={"En-suite"}
                IconComponent={
                  <Icon name="toilet" backgroundColor={colors.primary} />
                }
              />
              <ListItemSeparator />
              <CheckboxFormField
                name="is_desk"
                title={"Desk"}
                IconComponent={
                  <Icon name="desk" backgroundColor={colors.primary} />
                }
              />
              <ListItemSeparator />
              <CheckboxFormField
                name="is_boiler"
                title={"Boiler In Room"}
                IconComponent={
                  <Icon name="water-boiler" backgroundColor={colors.primary} />
                }
              />
              <FormSubmitButton title="Add Room" />
            </AppForm>
          </View>
        </ScrollView>
      </Screen>
    </Modal>
  );
};

export default RoomAddFormModal;

const styles = StyleSheet.create({
  appFormContainer: { padding: 15 },
  button: {
    color: "red",
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
