import { StyleSheet, ScrollView, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const imageInputList = ({ imageURIs = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageURIs.map((uri) => (
            <ImageInput
              imageURI={uri}
              key={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default imageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
