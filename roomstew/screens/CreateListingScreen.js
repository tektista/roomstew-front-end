import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

// import CheckBox from "@react-native-community/checkbox";
import { CheckBox } from "@rneui/base";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppFormCheckbox from "../components/forms/AppFormCheckbox";

const validationSchema = Yup.object().shape({
  postcode: Yup.string().required().min(4).label("Postcode"),
  streetAddress: Yup.string().required().min(4).label("Street Address"),
  cityTown: Yup.string().required().min(4).label("City"),
});

const CreateListingScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          postcode: "",
          streetAddress: "",
          cityTown: "",
          hasGarden: true,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="map"
          keyboardType="default"
          name="postcode"
          placeholder="Postcode"
          textContentType="postalCode"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="house"
          keyboardType="default"
          name="streetAddress"
          placeholder="Street Address"
          textContentType="streetAddressLine1"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="location-city"
          keyboardType="default"
          name="cityTown"
          placeholder="City"
          textContentType="addressCity"
        />

        <AppFormCheckbox
          checkboxDescription="Does it have a garden"
          name="hasGarden"
        />

        <SubmitButton title="Next" />
      </AppForm>
    </Screen>
  );
};

export default CreateListingScreen;

const styles = StyleSheet.create({});
