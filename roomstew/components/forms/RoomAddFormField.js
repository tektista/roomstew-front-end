import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFormikContext } from "formik";
import RoomAddFormModal from "./RoomAddFormModal";

const RoomAddFormField = ({ modalVisible, handleModalClose }) => {
  const { setFieldValue, values, errors } = useFormikContext();

  const handleRoomSubmit = (room) => {
    setFieldValue("roomList", [...values.roomList, room]);
  };

  return (
    <RoomAddFormModal
      modalVisible={modalVisible}
      handleModalClose={handleModalClose}
      handleRoomSubmit={handleRoomSubmit}
    />
  );
};

export default RoomAddFormField;

const styles = StyleSheet.create({});
