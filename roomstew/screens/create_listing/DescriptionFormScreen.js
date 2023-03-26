import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";

import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import ImagePickerFormField from "../../components/forms/ImagePickerFormField";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";

const DescriptionFormScreen = ({ route, navigation }) => {
  const previousMergedValues = route.params.mergedValues;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    description: Yup.string().required().min(1).label("Description"),
    images: Yup.array()
      .min(1, "Please select at least one image.")
      .max(8, "Maximum of 8 images allowed."),
  });

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.appFormContainer}>
          <AppForm
            initialValues={{
              title: "",
              description: "",
              images: [],
            }}
            onSubmit={(values) => {
              const mergedValues = Object.assign(
                {},
                values,
                previousMergedValues
              );
              navigation.navigate("RoomsFormScreen", { mergedValues });
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
            />

            <View style={{ flex: 1 }}></View>

            <FormSubmitButton title="Next 4/5" />
          </AppForm>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DescriptionFormScreen;

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
