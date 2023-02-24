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
import AppListItemPickerForm from "../../components/forms/AppListItemPickerForm";
import ListItemPicker from "../../components/ListItemPicker";
import AppText from "../../components/AppText";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";
import colors from "../../config/colors";

const PropertyDetailsFormScreen = ({ route, navigation }) => {
  //HANDLE THESE VALUES
  // const validationSchema = Yup.object().shape({
  //   postcode: Yup.string().required().min(4).label("Postcode"),
  //   streetAddress: Yup.string().required().min(4).label("Street Address"),
  //   cityTown: Yup.string().required().min(4).label("City"),
  // });

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
          {/* 
          <ListItemPicker
            name={"bathroomCount"}
            title="Bathrooms"
            subTitle={number.toString()}
            IconComponent={
              <Icon name="toilet" backgroundColor={colors.primary} />
            }
            items={numbers}
            itemName={" bathrooms"}
            onSelectItem={(item) => setNumber(item)}
          /> */}

          <AppListItemPickerForm
            name="bathroomCount"
            title="Bathrooms"
            subTitle={number.toString()}
            IconComponent={
              <Icon name="toilet" backgroundColor={colors.primary} />
            }
            items={numbers}
            itemName={" bathrooms"}
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
          <SubmitButton title="Next 2/5" onPress={console.log(values)} />
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
