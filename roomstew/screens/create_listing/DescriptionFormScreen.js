import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";

import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import ImagePickerFormField from "../../components/forms/ImagePickerFormField";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";

const DescriptionFormScreen = ({ route, navigation }) => {
  const values = route.params.values;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    description: Yup.string().required().min(1).label("Description"),
    images: Yup.array()
      .min(1, "Please select at least one image.")
      .max(8, "Maximum of 8 images allowed."),
  });

  return (
    <Screen>
      <View>
        <AppText style={styles.locationTitle}> Location</AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            title: "",
            description: "",
            images: [],
          }}
          onSubmit={(values) => {
            navigation.navigate("RoomsFormScreen", { values });
          }}
          validationSchema={validationSchema}
        >
          <ImagePickerFormField name="images" />

          <TextInputFormField
            maxLength={128}
            autoCapitalize="none"
            autoCorrect={false}
            icon="title"
            keyboardType="default"
            name="title"
            placeholder="Title"
          />

          <TextInputFormField
            maxLength={1024}
            autoCapitalize="none"
            autoCorrect={false}
            icon="description"
            keyboardType="default"
            name="description"
            placeholder="Description"
            multiline={true}
            numberOfLines={3}
          />

          <FormSubmitButton title="Next 4/5" />
        </AppForm>
      </View>
    </Screen>
  );
};

export default DescriptionFormScreen;

const styles = StyleSheet.create({
  appFormContainer: {
    padding: 10,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
