import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import listingsService from "../../services/listingsService";

import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";
import ListItemPickerFormField from "../../components/forms/ListItemPickerFormField";
import CheckboxFormField from "../../components/forms/CheckboxFormField";

import Screen from "../../components/Screen";
import Icon from "../../components/Icon";
import colors from "../../config/colors";

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

import { useNavigation, useRoute } from "@react-navigation/native";
import ListItemSeparator from "../../components/ListItemSeparator";
const UserListingUpdateDescScreen = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();

  const listingId = route.params.item.id;

  const [isLoading, setIsLoading] = useState(true);
  const [listingPrefs, setListingPrefs] = useState({});
  const [titleAndDesc, setTitleAndDescObj] = useState({});
  const [base64DataList, setBase64DataList] = useState([]);

  const getListingDetails = async () => {
    try {
      const response = await listingsService.getAListingById(listingId);

      const {
        min_age,
        max_age,
        gender_preference,
        couples_allowed,
        smokers_allowed,
        pets_allowed,
        title,
        description,
      } = response.data.listingObj[0];

      const listingPrefs = {
        min_age: min_age,
        max_age: max_age,
        gender_preference: gender_preference,
        couples_allowed: couples_allowed,
        smokers_allowed: smokers_allowed,
        pets_allowed: pets_allowed,
      };

      const newTitleAndDesc = {
        title: title,
        description: description,
      };

      setListingPrefs(listingPrefs);

      setTitleAndDescObj(newTitleAndDesc);

      setBase64DataList(
        response.data.listingPhotoObjList.map(
          (photoObj) => photoObj.listing_photo
        )
      );

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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
    getListingDetails();
  }, []);

  useEffect(() => {
    console.log("listingPrefs", listingPrefs);
  }, [listingPrefs]);

  useEffect(() => {
    console.log("base64datalist", base64DataList);
  }, [listingPrefs]);

  useEffect(() => {
    setMinAgePickerItems(populatePickerItems(17, maxAge));
  }, [minAge, maxAge]);

  useEffect(() => {
    setMaxAgePickerItems(populatePickerItems(minAge, 99));
  }, [minAge, maxAge]);

  return (
    isLoading === false && (
      <Screen style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.appFormContainer}>
            <AppForm
              initialValues={{
                min_age: listingPrefs.min_age,
                max_age: listingPrefs.max_age,
                gender_preference: listingPrefs.gender_preference,
                couples_allowed: Boolean(listingPrefs.couples_allowed),
                pets_allowed: Boolean(listingPrefs.pets_allowed),
                smokers_allowed: Boolean(listingPrefs.smokers_allowed),
              }}
              onSubmit={(values) => {
                console.log("BYE", values);

                navigation.navigate("UserListingUpdateDescScreen", {
                  listingId: listingId,
                  title: titleAndDesc.title,
                  description: titleAndDesc.description,
                  listingPrefs: {
                    min_age: values.min_age,
                    max_age: values.max_age,
                    gender_preference: values.gender_preference,
                    couples_allowed: values.couples_allowed,
                    pets_allowed: values.pets_allowed,
                    smokers_allowed: values.smokers_allowed,
                  },
                  base64DataList: base64DataList,
                });
              }}
            >
              <ListItemSeparator />
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
              <ListItemSeparator />
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
              <ListItemSeparator />

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
              <ListItemSeparator />

              <CheckboxFormField
                name="couples_allowed"
                title={"Couples"}
                IconComponent={
                  <Icon name="account-heart" backgroundColor={colors.primary} />
                }
              />
              <ListItemSeparator />

              <CheckboxFormField
                name="smokers_allowed"
                title={"Smokers"}
                IconComponent={
                  <Icon name="cigar" backgroundColor={colors.primary} />
                }
              />
              <ListItemSeparator />

              <CheckboxFormField
                name="pets_allowed"
                title={"Pets"}
                IconComponent={
                  <Icon name="dog-side" backgroundColor={colors.primary} />
                }
              />
              <ListItemSeparator />
              <View style={{ flex: 1 }}></View>

              <FormSubmitButton title="Next 1/2" />
            </AppForm>
          </View>
        </ScrollView>
      </Screen>
    )
  );
};

export default UserListingUpdateDescScreen;

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
