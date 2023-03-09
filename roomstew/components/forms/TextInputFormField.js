import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppText from "../AppText";
import ErrorMessage from "./ErrorMessage";

const TextInputFormField = ({ name, title, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppText> {title} </AppText>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default TextInputFormField;

/* This form is so we don't need to set onBlur, onChangeText and a corresponding
 error message for every AppTextInput
 we use.  */
