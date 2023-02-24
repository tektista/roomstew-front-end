import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ListItemPicker from "../ListItemPicker";

const AppListItemPickerForm = ({
  name,
  title,
  subTitle,
  image,
  IconComponent,
  items,
  itemName,
  onSelectItem,
  selectedItem,
}) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <ListItemPicker
      title={title}
      subTitle={subTitle}
      image={image}
      IconComponent={IconComponent}
      items={items}
      itemName={itemName}
      onSelectItem={onSelectItem}
      selectedItem={selectedItem}
      onSelectItemSetFieldValue={(value) => setFieldValue(name, value)}
    />
  );
};

export default AppListItemPickerForm;

const styles = StyleSheet.create({});
