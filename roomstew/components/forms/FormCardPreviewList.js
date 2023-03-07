import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import CardRoomPreviewList from "../CardRoomPreviewList";

const FormCardPreviewList = ({ name }) => {
  const { values } = useFormikContext();

  return <CardRoomPreviewList roomList={values[name]} />;
};

export default FormCardPreviewList;

const styles = StyleSheet.create({});
