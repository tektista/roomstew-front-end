import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";

import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import CheckboxFormField from "../../components/forms/CheckboxFormField";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

const DetailsFormScreen = ({ route, navigation }) => {
  const numbers = [
    {
      label: "Bathrooms",
      value: 1,
    },
    {
      label: "Bathrooms",
      value: 2,
    },
    {
      label: "Bathrooms",
      value: 3,
    },
    {
      label: "Bathrooms",
      value: 4,
    },
    {
      label: "Bathrooms",
      value: 5,
    },
    {
      label: "Bathrooms",
      value: 6,
    },
    {
      label: "Bathrooms",
      value: 7,
    },
    {
      label: "Bathrooms",
      value: 8,
    },
    {
      label: "Bathrooms",
      value: 9,
    },
    {
      label: "Bathrooms",
      value: 10,
    },
    {
      label: "Bathrooms",
      value: 11,
    },
    {
      label: "Bathrooms",
      value: 12,
    },
  ];

  const [bathroomCount, setBathroomCount] = useState(1);
  const values = route.params.values;
  console.log(values);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            navigation.navigate("PreferencesFormScreen", { values })
          }
          // validationSchema={validationSchema}
        >
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
            name="bathroomCount"
            title="Bathrooms"
            subTitle={bathroomCount.toString()}
            IconComponent={
              <Icon name="toilet" backgroundColor={colors.primary} />
            }
            items={numbers}
            onSelectItem={(item) => setBathroomCount(item)}
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

          <FormSubmitButton title="Next 2/5" onPress={console.log(values)} />
        </AppForm>
      </View>
    </ScrollView>
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
    padding: 15,
    flex: 1,
  },
});
