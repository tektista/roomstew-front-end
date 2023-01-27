import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";

import AppCheckboxInput from "../AppCheckboxInput";

const AppFormCheckbox = ({
  name,
  checkboxDescription,
  value,
  ...otherProps
}) => {
  const { values, handleChange, setFieldValue } = useFormikContext();
  return (
    <>
      <AppCheckboxInput
        checkboxDescription={checkboxDescription}
        onValueChange={() => setFieldValue(name, !values[name])}
        value={values[name]}
      />
    </>
  );
};

export default AppFormCheckbox;

const styles = StyleSheet.create({});
