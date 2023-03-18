import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import TextInputFormField from "../../components/forms/TextInputFormField";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import PostcodeInputFormField from "../../components/forms/PostcodeInputFormField";
import AddressPickerFormField from "../../components/forms/AddressPickerFormField";

import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import colors from "../../config/colors";

import axios from "axios";

//TO DO create a form before this screen that will ask what type of property it is e.g. flat, house, room etc
//TO DO clear this screen and dont make the above changes
//TO DO alternative, just make a screen before this with one div and a picture saying post a listing

import { API_KEY } from "@env";

const LocationFormScreen = ({ navigation }) => {
  const getPostcoderAddress = async () => {
    try {
      const response = await axios.get(
        `https://ws.postcoder.com/pcw/${API_KEY}/address/${"uk"}/${"eh17%207nt"}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // getPostcoderAddress();

  const validationSchema = Yup.object().shape({
    postcode: Yup.string().required().min(4).label("Postcode"),
    street_address: Yup.string().required().min(4).label("Street Address"),
    city: Yup.string().required().min(2).label("City"),
  });

  useEffect(() => {}, []);

  // const countryListItems = [
  //   { label: "England", subTitle: "England", value: "England" },
  //   {
  //     label: "Northern Ireland",
  //     subTitle: "Northern Ireland",
  //     value: "Northern Ireland",
  //   },
  //   { label: "Scotland", subTitle: "Scotland", value: "Scotland" },
  //   { label: "Wales", subTitle: "Wales", value: "Wales" },
  // ];
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <AppText style={styles.formTitle}> Location</AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            postcodeToSearch: "",
            addressListPickerItems: [],
            tempStreetAddress: "",

            //SEND to next page formatted
            postcode: "",
            street_address: "",
            city: "",

            //REMOVE
            // country: "",
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
            placeholder="e.g. G128XX"
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
          {/* <TextInputFormField
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

          <ListItemPickerFormField
            name="postcode_alt"
            title="postcode alt"
            items={countryListItems}
          /> */}

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
