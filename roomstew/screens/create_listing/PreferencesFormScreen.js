import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "../../components/Screen";
import AppText from "../../components/AppText";

import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";

import Icon from "../../components/Icon";
import colors from "../../config/colors";
import CheckboxFormField from "../../components/forms/CheckboxFormField";

const populatePickerItems = (minAge, maxAge) => {
  const pickerItems = [];
  for (let age = minAge; age <= maxAge; age++) {
    let numberObj = {
      label: `${age} Years old`,
      subTitle: `${age} Years old`,
      value: age,
    };
    pickerItems.push(numberObj);
  }
  return pickerItems;
};

const PreferencesFormScreen = ({ route, navigation }) => {
  const previousMergedValues = route.params.mergedValues;

  const [minAge, setMinAge] = useState(17);
  const [maxAge, setMaxAge] = useState(99);

  const [minAgePickerItems, setMinAgePickerItems] = useState(
    populatePickerItems(minAge, maxAge)
  );
  const [maxAgePickerItems, setMaxAgePickerItems] = useState(
    populatePickerItems(minAge, maxAge)
  );

  const genderPreferencePickerItems = [
    {
      label: "Any",
      subTitle: "Any",
      value: 0,
    },
    {
      label: "Males Only",
      subTitle: "Males Only",
      value: 1,
    },

    {
      label: "Females Only",
      subTitle: "Females Only",
      value: 2,
    },
  ];

  useEffect(() => {
    setMinAgePickerItems(populatePickerItems(17, maxAge));
  }, [minAge, maxAge]);

  useEffect(() => {
    setMaxAgePickerItems(populatePickerItems(minAge, 99));
  }, [minAge, maxAge]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <AppText style={styles.title}> Roommate Preferences </AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            min_age: 17,
            max_age: 99,
            gender_preference: 0,
            couples_allowed: false,
            pets_allowed: false,
            smokers_allowed: false,
          }}
          onSubmit={(values) => {
            //HANDLE THESE
            const mergedValues = Object.assign(
              {},
              values,
              previousMergedValues
            );
            navigation.navigate("DescriptionFormScreen", { mergedValues });
          }}
        >
          <ListItemPickerFormField
            name="min_age"
            title="Minimum Age"
            IconComponent={
              <Icon
                name="format-list-numbered"
                backgroundColor={colors.primary}
              />
            }
            items={minAgePickerItems}
            onSelectItem={(item) => {
              if (item > maxAge) {
                setMaxAge(item);
                setMaxAgePickerItems(populatePickerItems(item, 99));
              }

              setMinAge(item);
              setMinAgePickerItems(populatePickerItems(17, maxAge));
            }}
          />

          <ListItemPickerFormField
            name="max_age"
            title="Max Age"
            IconComponent={
              <Icon
                name="format-list-numbered"
                backgroundColor={colors.primary}
              />
            }
            items={maxAgePickerItems}
            onSelectItem={(item) => {
              if (item < minAge) {
                setMinAge(item);
                setMinAgePickerItems(populatePickerItems(17, item));
              }

              setMaxAge(item);
              setMaxAgePickerItems(populatePickerItems(minAge, 99));
            }}
          />

          <ListItemPickerFormField
            name="gender_preference"
            title=" Gender"
            IconComponent={
              <Icon
                name="gender-male-female"
                backgroundColor={colors.primary}
              />
            }
            items={genderPreferencePickerItems}
          />

          <CheckboxFormField
            name="couples_allowed"
            title={"Couples"}
            IconComponent={
              <Icon name="account-heart" backgroundColor={colors.primary} />
            }
          />

          <CheckboxFormField
            name="smokers_allowed"
            title={"Smokers"}
            IconComponent={
              <Icon name="cigar" backgroundColor={colors.primary} />
            }
          />

          <CheckboxFormField
            name="pets_allowed"
            title={"Pets"}
            IconComponent={
              <Icon name="dog-side" backgroundColor={colors.primary} />
            }
          />
          <View style={{ flex: 1 }}></View>

          <FormSubmitButton title="Next 3/5" />
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default PreferencesFormScreen;

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
