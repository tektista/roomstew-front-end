import { StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import PostcodeInputFormField from "../../components/forms/PostcodeInputFormField";
import AddressPickerFormField from "../../components/forms/AddressPickerFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import Screen from "../../components/Screen";
import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

const LocationFormScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    postcode: Yup.string().required().min(4).label("Postcode"),
    street_address: Yup.string().required().min(4).label("Street Address"),
    city: Yup.string().required().min(2).label("City"),
  });

  return (
    <Screen style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <AppForm
            initialValues={{
              //initial values for postcode input
              postcodeToSearch: "",
              addressListPickerItems: [],
              tempStreetAddress: "",

              //the formatted values that will be sent to the next form
              postcode: "",
              street_address: "",
              city: "",
            }}
            onSubmit={(values) => {
              const locationValues = {
                postcode: values.postcode,
                street_address: values.street_address,
                city: values.city,
              };
              navigation.navigate("DetailsFormScreen", { locationValues });
            }}
            validationSchema={validationSchema}
          >
            <PostcodeInputFormField
              title="Postcode"
              name="postcode"
              sendAddressListToFieldName="addressListPickerItems"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              placeholder="e.g. SW1A 2AA"
              textContentType="postalCode"
            />

            <AddressPickerFormField
              name="tempStreetAddress"
              title="Street Address"
              IconComponent={
                <Icon name="sign-direction" backgroundColor={colors.primary} />
              }
              itemListName="addressListPickerItems"
              streetAddressVarName="street_address"
              cityVarName="city"
              postcodeVarName="postcode"
            />

            <View style={{ flex: 1 }}></View>
            <FormSubmitButton title="Next 1/5" />
          </AppForm>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default LocationFormScreen;

const styles = StyleSheet.create({});
