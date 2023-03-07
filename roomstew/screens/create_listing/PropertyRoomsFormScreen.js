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
import AppFormField from "../../components/forms/AppFormField";
import ListItemSeparator from "../../components/ListItemSeparator";
import AppListItemPickerForm from "../../components/forms/AppListItemPickerForm";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";
import AppFormImagePicker from "../../components/forms/AppFormImagePicker";
import AppDatePickerFormField from "../../components/forms/AppDatePickerFormField";

import colors from "../../config/colors";
import Icon from "../../components/Icon";

import AppButton from "../../components/AppButton";
import CardRoomPreview from "../../components/CardRoomPreview";

import AppText from "../../components/AppText";
import FormAddRoomModal from "../../components/forms/FormAddRoomModal";

import AppFormRoomModal from "../../components/forms/AppFormRoomModal";
import CardRoomPreviewList from "../../components/CardRoomPreviewList";
import FormCardPreviewList from "../../components/forms/FormCardPreviewList";

/* 

 <FlatList
          data={roomList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <CardRoomPreview
                roomNumber={index + 1}
                roomSize={item.room_size}
                isFurnished={item.room_is_furnished}
                startDate={item.start_date}
                endDate={item.end_date}
                rent={item.rent}
                deposit={item.room_deposit}
              />
            );
          }}
        />*/

const PropertyRoomsFormScreen = ({ navigation, route }) => {
  const values = route.params.values;

  const [roomList, setRoomList] = useState([]);

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

export default PropertyRoomsFormScreen;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 10,
  },
});
