import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  View,
} from "react-native";
import React from "react";

import AppText from "./AppText";

import colors from "../config/colors";

const { width } = Dimensions.get("window");

// 60% of the screen width
const height = (width / 100) * 75;

const PhotoScrollView = ({ photoObjListWIthDataUrl }) => {
  //formattedPhotoList is an array of objects with a dataUrl property
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      style={{ width, height }}
    >
      {photoObjListWIthDataUrl.map((photoObj, index) => (
        <ImageBackground
          key={index}
          source={{
            uri: photoObj.dataUrl,
          }}
          style={{
            width,
            height,
            resizeMode: "cover",

            padding: 7,
          }}
        >
          <View
            style={{
              backgroundColor: colors.white,
              alignSelf: "flex-start",
              padding: 5,
              borderRadius: "50%",

              shadowOffset: {
                width: 2,
                height: 2, // Add this line
              },
              shadowOpacity: 0.3, // Add this line
              shadowRadius: 5, // Add this line
            }}
          >
            <AppText style={{ color: colors.black }}>
              {index + 1}/{photoObjListWIthDataUrl.length}
            </AppText>
          </View>
        </ImageBackground>
      ))}
    </ScrollView>
  );
};

{
  /* <View
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text>Centered text</Text>
</View>; */
}

export default PhotoScrollView;

const styles = StyleSheet.create({});
