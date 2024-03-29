import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppText from "../AppText";
import ErrorMessage from "./ErrorMessage";

const TextInputFormField = ({
  name,
  title,
  width,
  dataFromDB,
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <View style={{ width: width }}>
        <View>
          <AppText style={styles.title}> {title} </AppText>
        </View>

        {dataFromDB ? (
          <AppTextInput
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}
          >
            {dataFromDB}
          </AppTextInput>
        ) : (
          <AppTextInput
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}
          />
        )}

        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
};

export default TextInputFormField;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

/* This form is so we don't need to set onBlur, onChangeText and a corresponding
 error message for every AppTextInput
 we use.  */
