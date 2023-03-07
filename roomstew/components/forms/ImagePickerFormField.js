import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const ImagePickerFormField = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageURI) => imageURI !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageURIs={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default ImagePickerFormField;
