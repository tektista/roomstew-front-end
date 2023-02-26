import { StyleSheet, Text, View, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";

import ImageInputList from "../../components/ImageInputList";

const PropertyDescriptionFormScreen = ({ route, navigation }) => {
  const values = route.params.values;
  console.log(values);

  const [imageURIs, setImageURIs] = useState([]);

  const handleAdd = (uri) => {
    setImageURIs([...imageURIs, uri]);
  };

  const handleRemove = (uri) => {
    setImageURIs(imageURIs.filter((imageURI) => imageURI !== uri));
  };

  return (
    <View>
      {/* <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} /> */}
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </View>
  );
};

export default PropertyDescriptionFormScreen;

const styles = StyleSheet.create({});
