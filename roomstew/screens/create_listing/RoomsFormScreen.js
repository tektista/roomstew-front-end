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
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import listingsService from "../../services/listingsService";
import ErrorMessage from "../../components/forms/ErrorMessage";

import Screen from "../../components/Screen";

import convertListingCreateObjToListingDbObj from "../../helpers/convertListingCreateObjToListingDbObj";
//FORM
import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import AppText from "../../components/AppText";

import AppButton from "../../components/AppButton";

import RoomAddFormField from "../../components/forms/RoomAddFormField";
import RoomCardPreviewListFormField from "../../components/forms/RoomCardPreviewListFormField";

const RoomsFormScreen = ({ navigation, route }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const postListing = async (listingDbObj) => {
    try {
      const response = await listingsService.createAListing(listingDbObj);
    } catch (err) {
      throw err;
    }
  };

  const previousMergedValues = route.params.mergedValues;
  const [modalVisible, setModalVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    roomList: Yup.array()
      .min(1, "Please add atleast one room.")
      .max(12, "Maximum of 12 rooms."),
  });

  useEffect(() => {
    if (isSuccess) {
      Alert.alert("Listing succesfully created", "", [
        {
          text: "OK",
          onPress: () => navigation.navigate("IntroScreen", { clear: true }),
        },
      ]);
    }
  }, [isSuccess]);

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
            console.log("mergedValues");
            console.log(mergedValues);
            const listingDbObj =
              convertListingCreateObjToListingDbObj(mergedValues);

            console.log("convertedListingDbObj: ");
            console.log(listingDbObj);
            postListing(listingDbObj);
            // setIsSuccess(true);

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

{
  /* <View
style={{
  flexGrow: 1,
  height: 450,
  padding: 5,

  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 5,
}}
> */
}

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
