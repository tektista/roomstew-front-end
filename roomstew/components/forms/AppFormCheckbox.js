import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppCheckboxInput from "../AppCheckboxInput";

const AppFormCheckbox = ({
  name,
  value,
  title,
  subTitle,
  image,
  IconComponent,
  ...otherProps
}) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppCheckboxInput
        onValueChange={() => setFieldValue(name, !values[name])}
        title={title}
        value={values[name]}
        IconComponent={IconComponent}
      />
    </>
  );
};

export default AppFormCheckbox;

const styles = StyleSheet.create({});
