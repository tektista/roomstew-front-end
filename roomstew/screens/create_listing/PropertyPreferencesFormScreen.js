import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Screen from "../../components/Screen";
import AppText from "../../components/AppText";

import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";
import AppListItemPickerForm from "../../components/forms/AppListItemPickerForm";
import ListItemSeparator from "../../components/ListItemSeparator";

import Icon from "../../components/Icon";
import colors from "../../config/colors";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";

const PropertyPreferencesFormScreen = ({ route, navigation }) => {
  const values = route.params.values;
  console.log(values);

  //used for setting the ListItemPicker's selection rage by populating numbers array
  const minMaxAgePickerItems = [];

  for (let age = 18; age <= 99; age++) {
    let numberObj = {
      label: "Years old",
      value: age,
    };

    minMaxAgePickerItems.push(numberObj);
    console.log(minMaxAgePickerItems);
  }

  const genderPreferencePickerItems = [
    {
      label: "",
      value: "Any",
    },

    {
      label: "",
      value: "Male only",
    },

    {
      label: "",
      value: "Female only",
    },
  ];

  //used for setting the ListItemPicker's selection rage
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(99);
  const [genderPreference, setGenderPreference] = useState("Any");

  return (
    <Screen>
      <View>
        <AppText style={styles.title}> Preferences </AppText>
      </View>

      <View style={styles.appFormContainer}>
        <AppForm
          initialValues={{
            min_age: 18,
            max_age: 99,
            gender_preference: 0,
            couples_allowed: false,
            pets_allowed: false,
            smokers_allowed: false,
          }}
          onSubmit={(values) =>
            //HANDLE THESE
            navigation.navigate("PropertyPreferencesFormScreen", { values })
          }
          // validationSchema={validationSchema}
        >
          <AppListItemPickerForm
            name="min_age"
            title="Minimum Age"
            subTitle={minAge.toString()}
            IconComponent={
              <Icon
                name="format-list-numbered"
                backgroundColor={colors.primary}
              />
            }
            items={minMaxAgePickerItems}
            onSelectItem={(item) => setMinAge(item)}
          />

          <AppListItemPickerForm
            name="max_age"
            title="Max Age"
            subTitle={maxAge.toString()}
            IconComponent={
              <Icon
                name="format-list-numbered"
                backgroundColor={colors.primary}
              />
            }
            items={minMaxAgePickerItems}
            onSelectItem={(item) => setMaxAge(item)}
          />

          <AppListItemPickerForm
            name="gender_preference"
            title=" Gender"
            subTitle={genderPreference}
            IconComponent={
              <Icon
                name="format-list-numbered"
                backgroundColor={colors.primary}
              />
            }
            items={genderPreferencePickerItems}
            onSelectItem={(item) => setGenderPreference(item)}
          />

          <AppFormCheckbox
            name="couples_allowed"
            title={"Couples"}
            IconComponent={
              <Icon name="account-heart" backgroundColor={colors.primary} />
            }
          />

          <AppFormCheckbox
            name="smokers_allowed"
            title={"Smokers"}
            IconComponent={
              <Icon name="cigar" backgroundColor={colors.primary} />
            }
          />

          <SubmitButton title="Next 3/5" onPress={console.log(values)} />
        </AppForm>
      </View>
    </Screen>
  );
};

export default PropertyPreferencesFormScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  appFormContainer: {
    padding: 10,
  },
});
