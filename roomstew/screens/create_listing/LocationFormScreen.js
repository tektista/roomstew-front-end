import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import AppText from "../../components/AppText";

const validationSchema = Yup.object().shape({
  postcode: Yup.string().required().min(4).label("Postcode"),
  streetAddress: Yup.string().required().min(4).label("Street Address"),
  cityTown: Yup.string().required().min(4).label("City"),
});

const LocationFormScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <AppText style={styles.formTitle}> Location</AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            postcode: "",
            streetAddress: "",
            cityTown: "",
          }}
          onSubmit={(values) =>
            navigation.navigate("DetailsFormScreen", { values })
          }
          validationSchema={validationSchema}
        >
          <TextInputFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="map"
            keyboardType="default"
            name="postcode"
            placeholder="Postcode"
            textContentType="postalCode"
          />

          <TextInputFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="house"
            keyboardType="default"
            name="streetAddress"
            placeholder="Street Address"
            textContentType="streetAddressLine1"
          />

          <TextInputFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="location-city"
            keyboardType="default"
            name="cityTown"
            placeholder="City"
            textContentType="addressCity"
          />
          <View style={{ flex: 1 }}></View>
          <FormSubmitButton title="Next 1/5" />
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default LocationFormScreen;

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  appFormContainer: {
    padding: 10,
    flex: 1,
  },
});
