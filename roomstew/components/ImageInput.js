import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import ExpoVectorIcon from "./ExpoVectorIcon";

const ImageInput = ({ imageBase64Data, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library.");
  };

  //If there isn't an image URI select an image
  const handlePress = () => {
    if (!imageBase64Data) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        //If they delete an image set the imageURI to null
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  //Select an image from the library
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      base64: true,
    });

    //PASSING the URI up to parent if not cancelled
    if (!result.canceled) {
      onChangeImage(result.assets[0].base64);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {/* IF no image URI display the placeholder camera icon */}
      <View style={styles.container}>
        {!imageBase64Data && (
          <ExpoVectorIcon
            family="mi"
            name="add-a-photo"
            size={40}
            color={colors.medium}
          />
        )}

        {/* If there is an image uri, display the image */}
        {/* {imageBase64Data && <Image source={{ uri: imageBase64Data }} style={styles.image} />} */}
        {imageBase64Data && (
          <Image
            source={{ uri: `data:image/jpg;base64,${imageBase64Data}` }}
            style={styles.image}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    overflow: "hidden",
    height: 100,
    width: 100,

    marginHorizontal: 5,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});
