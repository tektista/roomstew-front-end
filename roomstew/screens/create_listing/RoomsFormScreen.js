import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { getFormatedDate } from "react-native-modern-datepicker";

import Screen from "../../components/Screen";

//FORM
import AppForm from "../../components/forms/AppForm";
import FormSubmitButton from "../../components/forms/FormSubmitButton";

import AppText from "../../components/AppText";

import AppButton from "../../components/AppButton";

import RoomAddFormField from "../../components/forms/RoomAddFormField";
import RoomCardPreviewListFormField from "../../components/forms/RoomCardPreviewListFormField";

const RoomsFormScreen = ({ navigation, route }) => {
  const values = route.params.values;
  console.log(values);
  const [modalVisible, setModalVisible] = useState(false);

  // I need to set the values of the outer form by returning the values of the inner form

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <AppText style={styles.formTitle}> Rooms </AppText>
      </View>
      <View style={styles.appFormContainer}>
        <AppButton title="Add a room" onPress={() => setModalVisible(true)} />
        <AppForm
          initialValues={{ roomList: [] }}
          onSubmit={(values) => {
            console.log(values);
          }}
          //handle validationScheme
        >
          <RoomAddFormField
            modalVisible={modalVisible}
            handleModalClose={(value) => {
              setModalVisible(value);
            }}
          />

          <RoomCardPreviewListFormField name="roomList" />

          <View style={{ flex: 1 }}></View>

          <FormSubmitButton title="Post Listing 5/5" />
        </AppForm>
      </View>
    </ScrollView>
  );
};

export default RoomsFormScreen;

const styles = StyleSheet.create({
  appFormContainer: {
    padding: 15,
    flex: 1,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
