import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";

import * as Yup from "yup";

import ImageInputList from "../../components/ImageInputList";

import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import AppFormImagePicker from "../../components/forms/AppFormImagePicker";

import Screen from "../../components/Screen";

const PropertyDescriptionFormScreen = ({ route, navigation }) => {
  //   const handleAdd = (uri) => {
  //     setImageURIs([...imageURIs, uri]);
  //   };

  //   const handleRemove = (uri) => {
  //     setImageURIs(imageURIs.filter((imageURI) => imageURI !== uri));
  //   };

  //   return (
  //     <View>
  //       {/* <Button title="Select Image" onPress={selectImage} />
  //       <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} /> */}
  //       <ImageInputList
  //         imageURIs={imageURIs}
  //         onAddImage={handleAdd}
  //         onRemoveImage={handleRemove}
  //       />
  //     </View>
  //   );

  const values = route.params.values;
  console.log(values);

  const [imageURIs, setImageURIs] = useState([]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    description: Yup.string().required().min(1).label("Description"),
    images: Yup.array().min(1, "Please select at least one image."),
  });

  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />

        <AppFormField
          maxLength={128}
          autoCapitalize="none"
          autoCorrect={false}
          icon="title"
          keyboardType="default"
          name="title"
          placeholder="Title"
        />

        <AppFormField
          maxLength={1024}
          autoCapitalize="none"
          autoCorrect={false}
          icon="description"
          keyboardType="default"
          name="title"
          placeholder="Description"
        />

        <SubmitButton title="Next 4/5" />
      </AppForm>
    </Screen>
  );
};

export default PropertyDescriptionFormScreen;

const styles = StyleSheet.create({});
