import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { getFormatedDate } from "react-native-modern-datepicker";
import * as Yup from "yup";
import Screen from "../../components/Screen";
import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import CheckboxFormField from "../../components/forms/CheckboxFormField";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import ImagePickerFormField from "../../components/forms/ImagePickerFormField";
import DatePickerFormFieldField from "../../components/forms/DatePickerFormField";
import ListItemSeparator from "../../components/ListItemSeparator";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import colors from "../../config/colors";

import { useNavigation, useRoute } from "@react-navigation/native";
import roomsService from "../../services/roomsService";
import RoomSizePickerFormField from "../../components/forms/RoomSizePickerFormField";
const moment = require("moment");

const UserListingUpdateRoomScreen = () => {
  const route = useRoute();
  const roomId = route.params.roomObj;

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

  const [isLoading, setIsLoading] = useState(true);
  const [roomFromDB, setRoomFromDB] = useState({});
  const [roomPhotosFromDB, setRoomPhotosFromDB] = useState([]);

  const getRoomDetails = async () => {
    try {
      const response = await roomsService.getARoomsDetailsById(roomId);
      setRoomFromDB(response.data.roomObj[0]);
      setRoomPhotosFromDB(
        response.data.roomPhotoObjList.map((obj) => obj.room_photo)
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  useEffect(() => {
    console.log("Room from DB");
    console.log(roomFromDB);
    console.log(roomFromDB.room_description);
  }, [roomFromDB]);

  useEffect(() => {
    console.log(roomPhotosFromDB);
  }, [roomPhotosFromDB]);

  return (
    <Screen>
      <ScrollView>
        <View>
          <AppText style={styles.formTitle}> Add Room Details </AppText>
        </View>
        {isLoading === false && (
          <View style={styles.appFormContainer}>
            <AppForm
              initialValues={{
                room_description: roomFromDB.room_description,
                rent: roomFromDB.rent,
                room_deposit: roomFromDB.deposit,
                start_date: moment(new Date()).format("YYYY-MM-DD"),
                end_date: roomFromDB.end_date,
                room_size: roomFromDB.room_size,
                floor: roomFromDB.floor,

                is_desk: Boolean(roomFromDB.is_desk),
                is_en_suite: Boolean(roomFromDB.is_en_suite),
                is_boiler: Boolean(roomFromDB.is_boiler),
                room_is_furnished: Boolean(roomFromDB.room_is_furnished),

                roomImageList: roomPhotosFromDB,
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              // validationSchema={validationSchema}
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
                dataFromDB={roomFromDB.room_description}
              />

              <TextInputFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                name="rent"
                title="Rent /month in £"
                placeholder="650"
                dataFromDB={roomFromDB.rent}
              />

              <TextInputFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                name="room_deposit"
                title="Deposit in £"
                placeholder="650"
                dataFromDB={roomFromDB.deposit}
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

              <FormSubmitButton title="Update Room" />
            </AppForm>
          </View>
        )}
      </ScrollView>
    </Screen>
  );
};

export default UserListingUpdateRoomScreen;

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
