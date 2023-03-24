import React from "react";
import { useFormikContext } from "formik";

import { View, StyleSheet } from "react-native";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (imageBase64Data) => {
    setFieldValue(name, [...values[name], imageBase64Data]);
  };
  const handleRemove = (imageBase64Data, index) => {
    const removeIndex = values[name].findIndex(
      (imageData, i) => i === index && imageData === imageBase64Data
    );
    if (removeIndex !== -1) {
      const updatedValues = [...values[name]];
      updatedValues.splice(removeIndex, 1);
      setFieldValue(name, updatedValues);
    }
  };

  return (
    <View style={styles.container}>
      <ImageInputList
        imageBase64DataList={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormImagePicker;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
