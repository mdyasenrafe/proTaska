import { Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "../theme/Text/CustomText";
import { screenHeight, screenWidth } from "../theme/theme";
import LoadingSpinner from "../components/common/LoadingSpinner";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export default function Splash() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigaton = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigaton.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View>
      <Image source={require("../../assets/splash.png")} style={styles.image} />
      {loading && (
        <View style={styles.loading}>
          <LoadingSpinner />
        </View>
      )}
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
