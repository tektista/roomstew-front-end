import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import axios from "axios";
import { useFormikContext } from "formik";
import { API_KEY } from "@env";

import ErrorMessage from "./ErrorMessage";
import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import AppButton from "../AppButton";

const PostcodeInputFormField = ({
  name,
  title,
  sendAddressListToFieldName,
  ...otherProps
}) => {
  const {
    setFieldTouched,
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();

  const handleFindAddress = async () => {
    setFieldTouched(name);
    try {
      const postcodeToSearch = values[name];
      const postcodeWithSpace =
        postcodeToSearch.slice(0, -3) + " " + postcodeToSearch.slice(-3); // Add a space between the two parts of the postcode
      const postcodeWithPercent20 = postcodeWithSpace.replace(/ /g, "%20"); // Replace the space with %20

      const response = await axios.get(
        `https://ws.postcoder.com/pcw/${API_KEY}/address/${"uk"}/${postcodeWithPercent20}`
      );

      //unconverted response list
      const addressList = response.data;

      //convertedPickerItemsList
      const addressListPickerItems = [];

      for (const addressObj of addressList) {
        const summaryLine = addressObj.summaryline;

        const summaryLineItems = summaryLine.split(", ");
        const streetAddress = summaryLineItems[0]; // "34/1 Craighouse Gardens"
        const city = summaryLineItems[1]; // "Edinburgh"
        const postcode = summaryLineItems[summaryLineItems.length - 1]; // "EH10 5TY"

        const addressListPickerItem = {
          label: `${streetAddress}, ${city}, ${postcode}`,
          subTitle: `${streetAddress}, ${city}, ${postcode}`,
          value: `${streetAddress}, ${city}, ${postcode}`,
        };
        addressListPickerItems.push(addressListPickerItem);
      }
      setFieldValue(sendAddressListToFieldName, addressListPickerItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppText style={{ fontSize: 20 }}> {title} </AppText>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />

      <AppButton title="Find Address" onPress={() => handleFindAddress()} />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default PostcodeInputFormField;
