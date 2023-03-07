/* 

1. If they  press back, pass back values object
either using callback or separate button using FORMIK

2. If they press add room buttons, pass the values back 


//THIs file needs to pass back room objects
 	
MFEDEM 

*/

import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { getFormatedDate } from "react-native-modern-datepicker";

import Screen from "../../components/Screen";
import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import ListItemDatePicker from "../../components/ListItemDatePicker";
import ListItemSeparator from "../../components/ListItemSeparator";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import CheckboxFormField from "../../components/forms/CheckboxFormField";
import ImagePickerFormField from "../../components/forms/ImagePickerFormField";
import FormFormSubmitButton from "../../components/forms/FormFormFormSubmitButton";

import Icon from "../../components/Icon";
import colors from "../../config/colors";
import DatePickerFormFieldField from "../../components/forms/DatePickerFormField";
import PropertyRoomsFormScreen from "./RoomsFormScreen";

const RoomAddFormScreen = ({ route, navigation }) => {
  const { handleAddRoom } = route.params;

  const [imageURIs, setImageURIs] = useState([]);
  // the current day object
  const date = new Date();

  //INITIAL VALUES of START AND END FIELDS
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState("No end date");
  const [roomSize, setRoomSize] = useState("Single room");
  const [roomFloor, setRoomFloor] = useState("0");

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

  //MIN AND MAX CALENDAR VALUES FOR START AND END FIELDS (WE DONT NEED MIN START or MAX END)

  //THE SUBTITLE VALUES OF START AND END FIELDS
  //   const [startDateSubtitle, setStartDateSubtitle] = useState(
  //     getFormatedDate(date, "DD-MM-YYYY")
  //   );
  //   const [endDateSubtitle, setEndDateSubtitle] = useState(endDate);

  /*

min of start date stays the same
max of end date stays the same

min of end date is the max of start date
max of start date is the min of end date


*/

  const validationSchema = Yup.object().shape({
    room_description: Yup.string().required().min(1).label("Description"),
    rent: Yup.number().required().label("Rent per month").min(1),
    room_deposit: Yup.number().required().label("Deposit").min(1),
    room_images: Yup.array()
      .min(1, "Please select at least one image.")
      .max(8, "Maximum of 8 images allowed."),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          is_furnished: false,
          room_images: [],
        }}
        onSubmit={(values) => {
          handleAddRoom(values);
          console.log(values);
          navigation.goBack();
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
          minDate={getFormatedDate(date, "YYYY-MM-DD")}
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
          IconComponent={<Icon name="desk" backgroundColor={colors.primary} />}
        />
        <ListItemSeparator />
        <CheckboxFormField
          name="is_boiler"
          title={"Boiler In Room"}
          IconComponent={
            <Icon name="water-boiler" backgroundColor={colors.primary} />
          }
        />

        <FormFormSubmitButton title="Add Room" />
      </AppForm>
    </ScrollView>
  );
};

export default RoomAddFormScreen;

const styles = StyleSheet.create({});
