import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFormikContext } from "formik";
import FormAddRoomModal from "./FormAddRoomModal";

const AppFormRoomModal = ({ modalVisible, handleModalClose }) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormikContext();

  const handleRoomSubmit = (room) => {
    setFieldValue("roomList", [...values.roomList, room]);
  };

  return (
    <FormAddRoomModal
      modalVisible={modalVisible}
      handleModalClose={handleModalClose}
      handleRoomSubmit={handleRoomSubmit}
    />
  );
};

export default AppFormRoomModal;

const styles = StyleSheet.create({});
