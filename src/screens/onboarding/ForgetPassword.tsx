import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../../theme/Text/CustomText";

export default function ForgetPassword() {
  return (
    <SafeAreaView>
      <View>
        <CustomText>ForgetPassword</CustomText>
      </View>
    </SafeAreaView>
  );
}
