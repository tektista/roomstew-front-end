import { StyleSheet, View } from "react-native";
import React from "react";
import * as Yup from "yup";

// import CheckBox from "@react-native-community/checkbox";
import { CheckBox } from "@rneui/base";

import Screen from "../../components/Screen";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";

import AppText from "../../components/AppText";

const validationSchema = Yup.object().shape({
  postcode: Yup.string().required().min(4).label("Postcode"),
  streetAddress: Yup.string().required().min(4).label("Street Address"),
  cityTown: Yup.string().required().min(4).label("City"),
});

const LocationFormScreen = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <AppText style={styles.locationTitle}> Location</AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            postcode: "",
            streetAddress: "",
            cityTown: "",
          }}
          onSubmit={(values) =>
            navigation.navigate("PropertyDetailsFormScreen", { values })
          }
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
          <SubmitButton title="Next 1/5" />
        </AppForm>
      </View>
    </Screen>
  );
};

export default LocationFormScreen;

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
