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
import FormFormSubmitButton from "../../components/forms/FormFormFormSubmitButton";

import AppButton from "../../components/AppButton";

import RoomAddFormField from "../../components/forms/RoomAddFormField";
import RoomCardPreviewListFormField from "../../components/forms/RoomCardPreviewListFormField";

const RoomsFormScreen = ({ navigation, route }) => {
  const values = route.params.values;
  const [modalVisible, setModalVisible] = useState(false);

  // I need to set the values of the outer form by returning the values of the inner form

  return (
    <Screen>
      <ScrollView>
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

          <FormFormSubmitButton title="Post Listing 5/5" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

export default RoomsFormScreen;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 10,
  },
});
