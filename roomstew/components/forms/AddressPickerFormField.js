import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ListItemPicker from "../ListItemPicker";
import ErrorMessage from "./ErrorMessage";

const AddressPickerFormField = ({
  name,
  title,
  image,
  IconComponent,
  onSelectItem,
  itemListName,

  //pass as string
  streetAddressVarName,
  cityVarName,
  postcodeVarName,
}) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const items = values[itemListName];

  function getSubTitleByValue(itemList, value) {
    const item = itemList.find((item) => item.value === value);
    return item ? item.subTitle : null;
  }

  const subTitleFromValues = getSubTitleByValue(items, values[name]);

  function separateAddress(value) {
    const [streetAddress, city, postcode] = value
      .split(",")
      .map((s) => s.trim());
    return { streetAddress, city, postcode };
  }
  return (
    values[itemListName].length > 0 && (
      <>
        <ListItemPicker
          title={title}
          image={image}
          initialSubTitle={subTitleFromValues}
          IconComponent={IconComponent}
          items={items}
          onSelectItemSetFieldValue={(value) => {
            setFieldValue(name, value);

            const { streetAddress, city, postcode } = separateAddress(value);

            setFieldValue(streetAddressVarName, streetAddress);
            setFieldValue(cityVarName, city);
            setFieldValue(postcodeVarName, postcode);
          }}
          onSelectItem={onSelectItem}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
    )
  );
};

export default AddressPickerFormField;

const styles = StyleSheet.create({});
