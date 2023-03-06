import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";

import Screen from "../../components/Screen";
import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";

import AppButton from "../../components/AppButton";
import CardRoomPreview from "../../components/CardRoomPreview";

const PropertyRoomsFormScreen = ({ navigation, route }) => {
  const values = route.params.values;

  /*

  1. Modal route
  2. Navigator route

  1. WHEN addRoomButton is clicked, Use react navigate to go to the addRoom screen
  pass the values object from (previous screen) to the addRoom screen

  2. IF they click the back button, go back to the previous screen and pass
   the values object to it use react navigate again

  3. On room page there should be an AppForm with the following fields

  */

  // I need a card component that renders rooms in a card format
  // I need a component that renders a list of rooms in card format #
  // feed the initial values of the form to the roomCardcomponent

  //This formik form needs to have two buttons, one for adding a room, and one
  //for posting the listing

  //Modal

  const [roomList, setRoomList] = useState([
    {
      room_description: "asdfadsf",
      rent: 123,
      deposit: 123,
      start_date: "2023-03-05",
      end_date: "No end date",

      room_size: 1,
      is_desk: false,
      is_en_suite: false,
      is_boiler: false,
      floor: 0,
      is_furnished: true,
      room_images: [
        "file:///Users/john/Library/Developer/CoreSimulator/Devices/533FB601-209F-465B-9E18-A580D9698C15/data/Containers/Data/Application/46675AC2-6925-440B-B7FF-CEB749FC7DA1/Library/Caches/ExponentExperienceData/%2540anonymous%252Ffront-end-86036fef-7806-475a-a679-f9e588e599d4/ImagePicker/6B7AE5D9-6ED8-4762-8E34-957B8B4D8E9B.jpg",
      ],
    },
  ]);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        <AppForm
          initialValues={{
            previousValues: values,
            rooms: [],
          }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("PropertyAddRoomFormScreen");
          }}

          //HANDLE
          // validationSchema={validationSchema}
        >
          <FlatList
            data={roomList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <CardRoomPreview
                  roomNumber={index + 1}
                  roomSize={item.room_size}
                  isFurnished={item.is_furnished}
                  startDate={item.start_date}
                  endDate={item.end_date}
                  rent={item.rent}
                  deposit={item.deposit}
                />
              );
            }}
          />

          <SubmitButton title="post listing 5/5" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

export default PropertyRoomsFormScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
