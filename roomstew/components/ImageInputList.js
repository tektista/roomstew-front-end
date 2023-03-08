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
        {/*  */}
        <View style={styles.container}>
          {imageURIs.map((uri, index) => (
            <>
              <AppText>{index + 1}</AppText>
              <ImageInput
                imageURI={uri}
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </>
          ))}

          {/* The ImageInput which shows Camera Icon Placeholder (no set imageURI) */}
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
