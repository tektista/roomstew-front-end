import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const AppFormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (imageBase64Data) => {
    setFieldValue(name, [...values[name], imageBase64Data]);
  };

  const handleRemove = (imageBase64Data) => {
    setFieldValue(
      name,
      values[name].filter(
        (imageBase64DataFromList) => imageBase64DataFromList !== imageBase64Data
      )
    );
  };
  return (
    <>
      <ImageInputList
        imageBase64DataList={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
