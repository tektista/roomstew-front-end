import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";
import ListItemPicker from "../../components/ListItemPicker";
import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
import colors from "../../config/colors";
import AppFormNumberField from "../../components/forms/AppFormNumberField";

import { useFormikContext } from "formik";

const PropertyDetailsFormScreen = ({ route, navigation }) => {
  //HANDLE THESE VALUES
  // const validationSchema = Yup.object().shape({
  //   postcode: Yup.string().required().min(4).label("Postcode"),
  //   streetAddress: Yup.string().required().min(4).label("Street Address"),
  //   cityTown: Yup.string().required().min(4).label("City"),
  // });

  const numbers = [
    {
      label: "number",
      value: 1,
    },
    {
      label: "number",
      value: 2,
    },
    {
      label: "number",
      value: 3,
    },
    {
      label: "number",
      value: 4,
    },
    {
      label: "number",
      value: 5,
    },
    {
      label: "number",
      value: 6,
    },
    {
      label: "number",
      value: 7,
    },
    {
      label: "number",
      value: 8,
    },
    {
      label: "number",
      value: 9,
    },
    {
      label: "number",
      value: 10,
    },
    {
      label: "number",
      value: 11,
    },
    {
      label: "number",
      value: 12,
    },
  ]; //HANDLE THESE VALUES

  const [number, setNumber] = useState(0);

  const values = route.params.values;

  return (
    <ScrollView>
      <View>
        <AppText style={styles.title}> Property Details</AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            bills_included: false,
            internet_included: false,
            is_furnished: false,
            has_living_room: false,
            bathroomCount: "",
            has_garden: false,
            has_parking: false,
          }}
          onSubmit={(values) =>
            //HANDLE THESE
            navigation.navigate("PropertyDetailsFormScreen", { values })
          }
          // validationSchema={validationSchema}
        >
          <AppFormCheckbox
            name="bills_included"
            title={"Bills included"}
            IconComponent={
              <Icon
                name="home-lightning-bolt"
                backgroundColor={colors.primary}
              />
            }
          />

          <ListItemSeparator />

          <AppFormCheckbox
            name="internet_included"
            title={"Internet included"}
            IconComponent={
              <Icon name="wifi" backgroundColor={colors.primary} />
            }
          />

          <ListItemSeparator />

          <AppFormCheckbox
            name="is_furnished"
            title={"Furnished"}
            IconComponent={
              <Icon name="table-chair" backgroundColor={colors.primary} />
            }
          />

          <ListItemSeparator />

          <AppFormCheckbox
            name="has_living_room"
            title={"Living room"}
            IconComponent={
              <Icon
                name="home-lightning-bolt"
                backgroundColor={colors.primary}
              />
            }
          />

          <ListItemSeparator />

          <ListItemPicker
            title="Bathrooms"
            subTitle={number.toString()}
            IconComponent={
              <Icon name="toilet" backgroundColor={colors.primary} />
            }
            items={numbers}
            selectedItem={number}
            onSelectItem={(item) => setNumber(item)}
          />

          <ListItemSeparator />

          <AppFormCheckbox
            name="has_garden"
            title={"Garden"}
            IconComponent={
              <Icon name="grass" backgroundColor={colors.primary} />
            }
          />

          <ListItemSeparator />

          <AppFormCheckbox
            name="has_parking"
            title={"Parking"}
            IconComponent={
              <Icon name="parking" backgroundColor={colors.primary} />
            }
          />
          <SubmitButton title="Next 2/5" />
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default PropertyDetailsFormScreen;

const styles = StyleSheet.create({
  appFormContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
