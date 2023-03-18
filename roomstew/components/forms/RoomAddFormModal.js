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
import ErrorMessage from "./ErrorMessage";

const RoomAddFormModal = ({
  modalVisible,
  handleModalClose,
  handleRoomSubmit,
}) => {
  const validationSchema = Yup.object().shape({
    room_description: Yup.string().required().min(1).label("Description"),
    rent: Yup.number()
      .required()
      .label("Rent per month")
      .min(1)
      .typeError("Please enter a valid number."),
    room_deposit: Yup.number()
      .required()
      .label("Deposit")
      .min(1)
      .typeError("Please enter a valid number"),

    room_size: Yup.number()
      .required("Room size is required")
      .test(
        "is-not-negative-one",
        "Building type is required",
        (value) => value !== -1
      ),
    floor: Yup.number()
      .required("Room floor is required")
      .test(
        "is-not-negative-one",
        "Number of bathrooms is required",
        (value) => value !== -1
      ),
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("No end date");

  const roomSizePickerItems = [
    {
      label: "Single Room",
      subTitle: "Single Room",
      value: 0,
    },
    {
      label: "Double Room",
      subTitle: "Double Room",
      value: 1,
    },
  ];

  const roomFloorPickerItems = [];
  for (let floor = 0; floor < 100; floor++) {
    let floorObj = {
      label: `Floor ${floor} `,
      subTitle: `Floor ${floor} `,
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
                rent: "",
                room_deposit: "",
                start_date: getFormatedDate(startDate, "YYYY-MM-DD"),
                end_date: endDate,

                room_size: -1,
                is_desk: false,
                is_en_suite: false,
                is_boiler: false,
                floor: -1,
                room_is_furnished: false,
                roomImageList: [],
              }}
              onSubmit={(values) => {
                handleRoomSubmit(values);
                handleModalClose(false);
              }}
              validationSchema={validationSchema}
            >
              <ImagePickerFormField name="roomImageList" />

              <TextInputFormField
                maxLength={512}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                name="room_description"
                title="Room Description"
                placeholder="e.g. Double room with en-suite bathroom..."
                multiline={true}
              />

              <TextInputFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                name="rent"
                title="Rent /month in £"
                placeholder="650"
              />

              <TextInputFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                name="room_deposit"
                title="Deposit in £"
                placeholder="650"
              />

              <ListItemSeparator />

              <DatePickerFormFieldField
                name="start_date"
                title="Start Date"
                IconComponent={
                  <Icon name="calendar" backgroundColor={colors.primary} />
                }
                //max should be
                minDate={getFormatedDate(new Date(), "YYYY-MM-DD")}
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
                IconComponent={
                  <Icon name="calendar" backgroundColor={colors.primary} />
                }
                //min end date should be the max
                minDate={getFormatedDate(startDate, "YYYY-MM-DD")}
                // there should be no max end date

                //This is the bloody line causing errors TO DO LOOK OVER THIS WHOLE PAGE
                onSelectItem={(value) => {
                  setEndDate(getFormatedDate(new Date(value)), "YYYY-MM-DD");
                }}
              />
              <ListItemSeparator />

              <ListItemPickerFormField
                name="room_size"
                title="Room Size"
                IconComponent={
                  <Icon
                    name="image-size-select-small"
                    backgroundColor={colors.primary}
                  />
                }
                items={roomSizePickerItems}
              />
              <ListItemSeparator />
              <ListItemPickerFormField
                name="floor"
                title="Room Floor"
                IconComponent={
                  <Icon name="stairs" backgroundColor={colors.primary} />
                }
                items={roomFloorPickerItems}
              />
              <ListItemSeparator />
              <CheckboxFormField
                name="room_is_furnished"
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
