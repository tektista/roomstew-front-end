import { StyleSheet, Text, View } from "react-native";
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
      label: "Years old",
      value: age,
    };
    pickerItems.push(numberObj);
  }
  return pickerItems;
};

const PreferencesFormScreen = ({ route, navigation }) => {
  const values = route.params.values;
  console.log(values);

  //Initial subtitle values
  const [genderPreference, setGenderPreference] = useState("Any");

  const [minAge, setMinAge] = useState(17);
  const [maxAge, setMaxAge] = useState(99);

  const [minAgeSubtitle, setMinAgeSubtitle] = useState(minAge);
  const [maxAgeSubtitle, setMaxAgeSubtitle] = useState(maxAge);

  const [minAgePickerItems, setMinAgePickerItems] = useState(
    populatePickerItems(minAge, maxAge)
  );
  const [maxAgePickerItems, setMaxAgePickerItems] = useState(
    populatePickerItems(minAge, maxAge)
  );

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

  useEffect(() => {
    setMinAgePickerItems(populatePickerItems(17, maxAge));
  }, [minAge, maxAge]);

  useEffect(() => {
    setMaxAgePickerItems(populatePickerItems(minAge, 99));
  }, [minAge, maxAge]);

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
            navigation.navigate("DescriptionFormScreen", { values })
          }
        >
          <ListItemPickerFormField
            name="min_age"
            title="Minimum Age"
            subTitle={minAgeSubtitle.toString()}
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
                setMaxAgeSubtitle(item);
                setMaxAgePickerItems(populatePickerItems(item, 99));
              }

              setMinAge(item);
              setMinAgeSubtitle(item);
              setMinAgePickerItems(populatePickerItems(17, maxAge));
            }}
          />

          <ListItemPickerFormField
            name="max_age"
            title="Max Age"
            subTitle={maxAgeSubtitle.toString()}
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
                setMinAgeSubtitle(item);
                setMinAgePickerItems(populatePickerItems(17, item));
              }

              setMaxAge(item);
              setMaxAgeSubtitle(item);
              setMaxAgePickerItems(populatePickerItems(minAge, 99));
            }}
          />

          <ListItemPickerFormField
            name="gender_preference"
            title=" Gender"
            subTitle={genderPreference}
            IconComponent={
              <Icon
                name="gender-male-female"
                backgroundColor={colors.primary}
              />
            }
            items={genderPreferencePickerItems}
            onSelectItem={(item) => setGenderPreference(item)}
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

          <FormSubmitButton title="Next 3/5" />
        </AppForm>
      </View>
    </Screen>
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
    padding: 10,
  },
});
