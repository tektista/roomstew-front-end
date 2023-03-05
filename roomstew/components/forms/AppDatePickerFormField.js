import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFormikContext } from "formik";

import ListItemDatePicker from "../ListItemDatePicker";

const AppDatePickerFormField = ({
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
      subTitle={subTitle}
      image={image}
      IconComponent={IconComponent}
      onSelectItem={onSelectItem}
      onSelectItemSetFieldValue={(value) => {
        console.log(value);
        setFieldValue(name, value);
      }}
      maxDate={maxDate}
      minDate={minDate}
    />
  );
};

export default AppDatePickerFormField;

const styles = StyleSheet.create({});
