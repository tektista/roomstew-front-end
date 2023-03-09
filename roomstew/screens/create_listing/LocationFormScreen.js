import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";

import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import colors from "../../config/colors";

const LocationFormScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    postcode: Yup.string().required().min(4).label("Postcode"),
    street_address: Yup.string().required().min(4).label("Street Address"),
    city: Yup.string().required().min(2).label("City"),
    country: Yup.string().required().min(2).label("Country"),
  });

  const countryListItems = [
    { label: "England", subTitle: "England", value: "England" },
    {
      label: "Northern Ireland",
      subTitle: "Northern Ireland",
      value: "Northern Ireland",
    },
    { label: "Scotland", subTitle: "Scotland", value: "Scotland" },
    { label: "Wales", subTitle: "Wales", value: "Wales" },
  ];
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <AppText style={styles.formTitle}> Location</AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            postcode: "",
            street_address: "",
            city: "",
            country: "",
          }}
          onSubmit={(values) =>
            navigation.navigate("DetailsFormScreen", { values })
          }
          validationSchema={validationSchema}
        >
          <TextInputFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="postcode"
            title="Postcode"
            placeholder="e.g. G128XX"
            textContentType="postalCode"
          />
          <TextInputFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="street_address"
            title="Street Address"
            placeholder="e.g. 3/2 Main Street"
            textContentType="streetAddressLine1"
          />
          <TextInputFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="city"
            title="City/Town"
            placeholder="e.g. Glasgow"
            textContentType="addressCity"
          />
          <ListItemPickerFormField
            name="country"
            title="Country"
            IconComponent={
              <Icon name="flag" backgroundColor={colors.primary} />
            }
            items={countryListItems}
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
    padding: 15,
    flex: 1,
  },
});
