import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import CheckboxInput from "../CheckboxInput";

const CheckboxFormField = ({
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
      <CheckboxInput
        onValueChange={() => setFieldValue(name, !values[name])}
        title={title}
        value={values[name]}
        IconComponent={IconComponent}
      />
    </>
  );
};

export default CheckboxFormField;

const styles = StyleSheet.create({});
