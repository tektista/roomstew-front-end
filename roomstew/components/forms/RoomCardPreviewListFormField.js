import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import CardRoomPreviewList from "../CardRoomPreviewList";

const RoomCardPreviewListFormField = ({ name }) => {
  const { values, setFieldValue } = useFormikContext();

  const handleDelete = (roomIndex) => {
    setFieldValue(name, [
      ...values[name].filter((item, index) => index !== roomIndex),
    ]);
  };

  return (
    <CardRoomPreviewList roomList={values[name]} handleDelete={handleDelete} />
  );
};

export default RoomCardPreviewListFormField;

const styles = StyleSheet.create({});
