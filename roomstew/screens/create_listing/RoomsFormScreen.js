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
import SubmitButton from "../../components/forms/SubmitButton";

import AppButton from "../../components/AppButton";

import AppFormRoomModal from "../../components/forms/AppFormRoomModal";
import FormCardPreviewList from "../../components/forms/FormCardPreviewList";

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
          <AppFormRoomModal
            modalVisible={modalVisible}
            handleModalClose={(value) => {
              setModalVisible(value);
            }}
          />

          <FormCardPreviewList name="roomList" />

          <SubmitButton title="Post Listing 5/5" />
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
