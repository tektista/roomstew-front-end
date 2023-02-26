import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import AppText from "../../components/AppText";

import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";
import AppListItemPickerForm from "../../components/forms/AppListItemPickerForm";
import ListItemSeparator from "../../components/ListItemSeparator";

import Icon from "../../components/Icon";
import colors from "../../config/colors";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";

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

const PropertyPreferencesFormScreen = ({ route, navigation }) => {
  const values = route.params.values;

  //Initial subtitle values
  const [genderPreference, setGenderPreference] = useState("Any");

  //Max age,
  const [minAge, setMinAge] = useState(17);
  const [maxAge, setMaxAge] = useState(99);

  const [minAgeSubtitle, setMinAgeSubtitle] = useState(minAge);
  const [maxAgeSubtitle, setMaxAgeSubtitle] = useState(maxAge);

  //Populate initial picker items, we need to change these variables so there is a separate one for each
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
            navigation.navigate("PropertyPreferencesFormScreen", { values })
          }
        >
          <AppListItemPickerForm
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

          <AppListItemPickerForm
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

          <AppListItemPickerForm
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
