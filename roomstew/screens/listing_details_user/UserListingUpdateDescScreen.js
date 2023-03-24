import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import listingsService from "../../services/listingsService";

import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import ImagePickerFormField from "../../components/forms/ImagePickerFormField";
import AppText from "../../components/AppText";

import { useNavigation, useRoute } from "@react-navigation/native";

const UserListingUpdateDescScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const listingId = route.params.listingId;
  const title = route.params.title;
  const description = route.params.description;

  const listingPrefs = route.params.listingPrefs;
  console.log("GELLO");
  console.log(listingPrefs);
  const base64DataList = route.params.base64DataList;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    description: Yup.string().required().min(1).label("Description"),
    images: Yup.array()
      .min(1, "Please select at least one image.")
      .max(8, "Maximum of 8 images allowed."),
  });

  const updateListing = async (listingId, updateObj) => {
    try {
      const response = await listingsService.updateAListingById(
        listingId,
        updateObj
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <AppText style={styles.formTitle}>
            Property Description & Photos
          </AppText>
        </View>

        <View style={styles.appFormContainer}>
          <AppForm
            initialValues={{
              title: title,
              description: description,
              images: base64DataList,
            }}
            onSubmit={(values) => {
              const listingPhotoObjectList = values.images.map(
                (image, index) => {
                  return { listing_photo: image, listing_photo_order: index };
                }
              );

              const updateObj = {
                listingDetails: {
                  title: values.title,
                  description: values.description,
                  min_age: listingPrefs.min_age,
                  max_age: listingPrefs.max_age,
                  gender_preference: listingPrefs.gender_preference,
                  couples_allowed: listingPrefs.couples_allowed,
                  smokers_allowed: listingPrefs.smokers_allowed,
                  pets_allowed: listingPrefs.pets_allowed,
                },

                listingPhotoObjList: listingPhotoObjectList,
              };

              console.log("updateObj: ", updateObj);

              updateListing(listingId, updateObj);
            }}
            validationSchema={validationSchema}
          >
            <ImagePickerFormField name="images" />

            <TextInputFormField
              maxLength={128}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              name="title"
              title="Title"
              placeholder="e.g. 2 bed flat in London Available From..."
              dataFromDB={title}
            />

            <TextInputFormField
              maxLength={1024}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              name="description"
              title="Description"
              placeholder="e.g. Looking for a flatmate to share my 2 bed flat in London... Looking for someone who is... You can contact me at..."
              multiline={true}
              numberOfLines={3}
              dataFromDB={description}
            />

            <View style={{ flex: 1 }}></View>

            <FormSubmitButton title="Next 4/5" />
          </AppForm>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserListingUpdateDescScreen;

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
