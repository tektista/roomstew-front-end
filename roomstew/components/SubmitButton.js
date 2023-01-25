import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FormikContext } from "formik";

import AppButton from "./AppButton";

const submitButton = ({ title }) => {
  const { handleSubmit } = useContext(FormikContext);

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default submitButton;

const styles = StyleSheet.create({});
