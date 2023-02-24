import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppNumberInput from "../AppNumberInput";

const AppFormNumberField = ({
  name,
  title,
  IconComponent,
  value,
  ...otherProps
}) => {
  const { values, setFieldValue, handleChange } = useFormikContext();

  return (
    <>
      <AppNumberInput
        title={title}
        IconComponent={IconComponent}
        //initial valuue of the numberInput
        value={value}
        onChangeText={handleChange(name)}
      />
    </>
  );
};

export default AppFormNumberField;

const styles = StyleSheet.create({});
