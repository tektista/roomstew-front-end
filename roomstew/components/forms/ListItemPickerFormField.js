import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ListItemPicker from "../ListItemPicker";
import ErrorMessage from "./ErrorMessage";

const AppListItemPickerForm = ({
  name,
  title,
  image,
  IconComponent,
  items,
  onSelectItem,
}) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();

  function getSubTitleByValue(itemList, value) {
    const item = itemList.find((item) => item.value === value);
    return item ? item.subTitle : null;
  }

  const subTitleFromValues = getSubTitleByValue(items, values[name]);
  console.log(subTitleFromValues);

  return (
    <>
      <ListItemPicker
        title={title}
        image={image}
        initialSubTitle={subTitleFromValues}
        IconComponent={IconComponent}
        items={items}
        onSelectItemSetFieldValue={(value) => setFieldValue(name, value)}
        onSelectItem={onSelectItem}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppListItemPickerForm;

const styles = StyleSheet.create({});
