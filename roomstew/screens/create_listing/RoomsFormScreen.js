import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

import ErrorMessage from "../../components/forms/ErrorMessage";

import Screen from "../../components/Screen";

import convertListingObjToDbFormat from "../../helpers/convertListingCreateObjToListingDbObj";
//FORM
import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import AppText from "../../components/AppText";

import AppButton from "../../components/AppButton";

import RoomAddFormField from "../../components/forms/RoomAddFormField";
import RoomCardPreviewListFormField from "../../components/forms/RoomCardPreviewListFormField";

const RoomsFormScreen = ({ navigation, route }) => {
  const postListing = (listingDbObj) => {
    axios
      .post("http://localhost:3002/api/listings", listingDbObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const previousMergedValues = route.params.mergedValues;
  const [modalVisible, setModalVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    roomList: Yup.array()
      .min(1, "Please add atleast one room.")
      .max(12, "Maximum of 12 rooms."),
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <AppText style={styles.formTitle}> Rooms </AppText>
      </View>
      <View style={styles.appFormContainer}>
        <AppButton title="Add a room" onPress={() => setModalVisible(true)} />
        <AppForm
          initialValues={{ roomList: [] }}
          onSubmit={(values) => {
            const mergedValues = Object.assign(
              {},
              values,
              previousMergedValues
            );
            //process the merged values in the correct format for sending to db
            const listingDbObj = convertListingObjToDbFormat(mergedValues);
            postListing(listingDbObj);

            navigation.navigate("Listings");

            //TO DO: Add a success message
          }}
          validationSchema={validationSchema}
        >
          <RoomAddFormField
            modalVisible={modalVisible}
            handleModalClose={(value) => {
              setModalVisible(value);
            }}
          />

          <RoomCardPreviewListFormField name="roomList" />

          <View style={{ flex: 1 }}></View>

          <FormSubmitButton title="Post Listing 5/5" />
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default RoomsFormScreen;

const styles = StyleSheet.create({
  appFormContainer: {
    padding: 15,
    flex: 1,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
