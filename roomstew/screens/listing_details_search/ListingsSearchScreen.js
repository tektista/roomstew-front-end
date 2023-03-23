import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";
import { Button, ScrollView } from "react-native";
import Screen from "../../components/Screen";

import AppForm from "../../components/forms/AppForm";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import TextInputFormField from "../../components/forms/TextInputFormField";
import Icon from "../../components/Icon";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import ListItemSeparator from "../../components/ListItemSeparator";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

const items = [{ label: "Any", value: "", subTitle: "Any" }];

for (let i = 1; i <= 12; i++) {
  const label = `${i} room${i > 1 ? "s" : ""} available`;
  const value = i;
  const subTitle = label;
  items.push({ label, value, subTitle });
}

const validationSchema = Yup.object().shape({
  cityToSearch: Yup.string()
    .min(2, "City name should be at least 2 characters long")
    .max(50, "City name should be at most 50 characters long"),
  minRoomsAvailable: Yup.number(),
  minRent: Yup.number().nullable(),
  maxRent: Yup.number()
    .nullable()
    .test(
      "maxRent",
      "Max rent should be greater than or equal to min rent",
      function (value) {
        const { minRent } = this.parent;
        if (value && minRent && value < minRent) {
          return false;
        }
        return true;
      }
    ),
});

const ListingsSearchScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <AppText style={{ fontWeight: "bold", fontSize: 25 }}>Search</AppText>
      </View>

      <View style={{ flex: 1 }}>
        <AppForm
          initialValues={{
            cityToSearch: "",
            minRoomsAvailable: 0,
            minRent: 0,
            maxRent: 0,
          }}
          onSubmit={(values) => {
            console.log("values", values);

            navigation.navigate("ListingsResultsScreen", { values });
          }}
          validationSchema={validationSchema}
        >
          <View style={{ padding: 20 }}>
            <TextInputFormField
              style={{ width: "100%" }}
              autoCapitalize="none"
              autocorrect={false}
              keyboardType="default"
              title="City"
              name="cityToSearch"
              placeholder="e.g. Glasgow (optional)"
              textContentType="addressCity"
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInputFormField
                width="45%"
                autoCapitalize="none"
                autocorrect={false}
                keyboardType="numeric"
                title="min rent in £/month"
                name="minRent"
                placeholder="400 (optional)"
                textContentType="none"
              />

              <TextInputFormField
                width="45%"
                autoCapitalize="none"
                autocorrect={false}
                keyboardType="numeric"
                title="max rent in £/month"
                name="maxRent"
                placeholder="650 (optional)"
                textContentType="none"
              />
            </View>
          </View>

          <ListItemSeparator />

          <ListItemPickerFormField
            name="minRoomsAvailable"
            title="No. of available rooms"
            items={items}
            IconComponent={<Icon name="bed" backgroundColor={colors.primary} />}
          />
          <ListItemSeparator />

          <View style={{ flexGrow: 1 }}></View>

          <View style={{ padding: 10 }}>
            <FormSubmitButton title="Search" />
          </View>
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default ListingsSearchScreen;

const styles = StyleSheet.create({});
