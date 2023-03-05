import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";

import Screen from "../../components/Screen";
import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";

import AppButton from "../../components/AppButton";

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

  const [roomList, setRoomList] = useState([]);

  return (
    <Screen>
      <ScrollView>
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
          <SubmitButton title="post listing 5/5" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

export default PropertyRoomsFormScreen;

const styles = StyleSheet.create({});
