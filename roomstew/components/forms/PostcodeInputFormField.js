import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import axios from "axios";

import AppTextInput from "../AppTextInput";
import AppText from "../AppText";
import ErrorMessage from "./ErrorMessage";
import AppButton from "../AppButton";

import { API_KEY } from "@env";

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

  /* 
  1. User enters postcode and pressed submit button
  2. Use axios and postcoders API to get the address list based on the postcode
  3. Set the address list equal to a field in the form address_list
  4. Render a pickerItem form field with the address list as the items
  
  */

  //TO DO make sure userinput is in the form aa17 with no spaces and no caps

  const handleFindAddress = async () => {
    setFieldTouched(name);
    try {
      //Format the postcode for the API
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

      //TO DO separate into function
      for (const addressObj of addressList) {
        const addressListPickerItem = {
          label: `${addressObj.number || addressObj.premise} ${
            addressObj.street
          }, ${addressObj.posttown}, ${addressObj.postcode}`,
          subTitle: `${addressObj.number || addressObj.premise} ${
            addressObj.street
          }, ${addressObj.posttown}, ${addressObj.postcode}`,
          value: `${addressObj.number || addressObj.premise} ${
            addressObj.street
          }, ${addressObj.posttown}, ${addressObj.postcode}`,
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
      <AppText> {title} </AppText>
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
