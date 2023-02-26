import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import ImageInput from "../../components/ImageInput";

const PropertyDescriptionFormScreen = ({ route, navigation }) => {
  const values = route.params.values;
  console.log(values);

  const [imageURI, setImageURI] = useState(null);

  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  //   const selectImage = async () => {
  //     let result = await ImagePicker.launchImageLibraryAsync();
  //     console.log(result);
  //     try {
  //       if (result.canceled === false) {
  //         setImageURI(result.assets[0].uri);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImageURI(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />
      <ImageInput imageURI={imageURI} />
    </View>
  );
};

export default PropertyDescriptionFormScreen;

const styles = StyleSheet.create({});
