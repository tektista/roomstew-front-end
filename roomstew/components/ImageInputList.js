import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";
import AppText from "./AppText";

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
          {imageURIs.map((uri, index) => (
            <View key={index} style={styles.imageContainer}>
              <ImageInput
                imageURI={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
              <AppText style={styles.indexText}>Photo {index + 1}</AppText>
            </View>
          ))}

          {/* The ImageInput which shows Camera Icon Placeholder (no set imageURI) */}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default imageInputList;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  indexText: {
    marginTop: 5,
  },
});
