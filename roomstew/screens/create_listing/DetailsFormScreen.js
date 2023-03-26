import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import CheckboxFormField from "../../components/forms/CheckboxFormField";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

import defaultStyles from "../../config/styles";

const DetailsFormScreen = ({ route, navigation }) => {
  const previousValues = route.params.locationValues;

  const createBathroomListItems = (maxBathroomCount) => {
    const bathroomListItems = [];

    for (let i = 1; i <= maxBathroomCount; i++) {
      bathroomListItems.push({
        label: `${i} bathroom${i > 1 ? "s" : ""}`,
        subTitle: i,
        value: i,
      });
    }

    return bathroomListItems;
  };

  const bathroomListItems = createBathroomListItems(12);

  const buildingTypeListItems = [
    {
      label: "Flat",
      subTitle: "Flat",
      value: 0,
    },
    {
      label: "House",
      subTitle: "House",
      value: 1,
    },
    {
      label: "Other",
      subTitle: "Other",
      value: 2,
    },
  ];

  const validationSchema = Yup.object().shape({
    building_type: Yup.number()
      .required("Building type is required")
      .test(
        "is-not-negative-one",
        "Building type is required",
        (value) => value !== -1
      ),
    bathroom_count: Yup.number()
      .required("Number of bathrooms is required")
      .test(
        "is-not-negative-one",
        "Number of bathrooms is required",
        (value) => value !== -1
      ),
  });

  return (
    <Screen style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.appFormContainer}>
          <AppForm
            initialValues={{
              building_type: -1,
              bills_included: false,
              internet_included: false,
              is_furnished: false,
              has_living_room: false,
              bathroom_count: -1,
              has_garden: false,
              has_parking: false,
              has_hmo: false,
            }}
            onSubmit={(values) => {
              const mergedValues = Object.assign({}, values, previousValues);
              navigation.navigate("PreferencesFormScreen", { mergedValues });
            }}
            validationSchema={validationSchema}
          >
            <ListItemSeparator />
            <ListItemPickerFormField
              name="building_type"
              title="Building Type"
              IconComponent={
                <Icon name="office-building" backgroundColor={colors.primary} />
              }
              items={buildingTypeListItems}
            />
            <ListItemSeparator />
            <CheckboxFormField
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

            <CheckboxFormField
              name="internet_included"
              title={"Internet included"}
              IconComponent={
                <Icon name="wifi" backgroundColor={colors.primary} />
              }
            />

            <ListItemSeparator />

            <CheckboxFormField
              name="is_furnished"
              title={"Furnished"}
              IconComponent={
                <Icon name="table-chair" backgroundColor={colors.primary} />
              }
            />

            <ListItemSeparator />

            <CheckboxFormField
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

            <ListItemPickerFormField
              name="bathroom_count"
              title="Bathrooms"
              IconComponent={
                <Icon name="toilet" backgroundColor={colors.primary} />
              }
              items={bathroomListItems}
            />

            <ListItemSeparator />

            <CheckboxFormField
              name="has_hmo"
              title={"HMO License"}
              IconComponent={
                <Icon
                  name="account-multiple-check"
                  backgroundColor={colors.primary}
                />
              }
            />

            <ListItemSeparator />

            <CheckboxFormField
              name="has_garden"
              title={"Garden"}
              IconComponent={
                <Icon name="grass" backgroundColor={colors.primary} />
              }
            />

            <ListItemSeparator />

            <CheckboxFormField
              name="has_parking"
              title={"Parking"}
              IconComponent={
                <Icon name="parking" backgroundColor={colors.primary} />
              }
            />

            <View style={{ flex: 1 }}></View>

            <FormSubmitButton title="Next 2/5" />
          </AppForm>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default DetailsFormScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  appFormContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
