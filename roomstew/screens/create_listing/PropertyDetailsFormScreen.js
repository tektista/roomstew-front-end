import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";

import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";

const PropertyDetailsFormScreen = ({ route }) => {
  const values = route.params.values;
  console.log(values);
  return (
    <ScrollView>
      <Text>Hello World</Text>
    </ScrollView>
  );
};

export default PropertyDetailsFormScreen;

const styles = StyleSheet.create({});
