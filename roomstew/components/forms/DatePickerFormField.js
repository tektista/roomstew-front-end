import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFormikContext } from "formik";

import ListItemDatePicker from "../ListItemDatePicker";

const DatePickerFormFieldField = ({
  name,
  title,
  subTitle,
  image,
  IconComponent,
  onSelectItem,
  maxDate,
  minDate,
}) => {
  const { values, setFieldValue, errors } = useFormikContext();

  console.log(minDate);
  return (
    <ListItemDatePicker
      title={title}
      subTitle={values[name]}
      image={image}
      IconComponent={IconComponent}
      onSelectItem={onSelectItem}
      onSelectItemSetFieldValue={(value) => {
        setFieldValue(name, value);
      }}
      maxDate={maxDate}
      minDate={minDate}
    />
  );
};

export default DatePickerFormFieldField;

const styles = StyleSheet.create({});
