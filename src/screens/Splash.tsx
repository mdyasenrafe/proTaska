import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../theme/Text/CustomText";
import { screenHeight, screenWidth } from "../theme/theme";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function Splash() {
  const [loading, setLoading] = useState(true);
  return (
    <View>
      <Image source={require("../../assets/splash.png")} style={styles.image} />
      <View style={styles.loading}>
        <LoadingSpinner />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight,
  },
  loading: {
    position: "absolute",
    bottom: 0,
    width: screenWidth,
  },
});
