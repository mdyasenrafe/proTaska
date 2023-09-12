import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../../theme/Text/CustomText";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import CutstomInput from "../../components/common/CutstomInput";
import Button from "../../components/common/Button";

export default function Verificaiton({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleVerify = () => {
    if (code === "") {
      setError("Please enter your code");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading_area}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather
            name="arrow-left"
            size={24}
            color={colors.primary}
            onPress={() => navigation.goBack()}
            style={{ marginBottom: 8, marginRight: 8 }}
          />
          <CustomText style={styles.heading_text} preset="h3">
            Verification
          </CustomText>
        </View>
        <CustomText style={{ marginBottom: 24, color: "grey" }} preset="p4">
          Enter the 4-digit code sent to your email. If you didn’t receive a
          code, check your spam folder or click Resend.
        </CustomText>
      </View>

      <CutstomInput
        label="Code"
        placeholder="Type your code"
        autoCapitalize="none"
        keyboardType="number-pad"
        onChangeText={(e) => {
          setCode(e);
          setError("");
        }}
        returnKeyType="next"
        style={{
          borderColor: error ? "red" : "lightgrey",
        }}
      />
      {error && (
        <CustomText style={styles.error} preset="p3">
          {error}
        </CustomText>
      )}
      <Button title="Verify" onPress={handleVerify} style={{ marginTop: 24 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: colors.white,
    flex: 1,
  },
  heading_area: { marginBottom: 16 },
  heading_text: {
    marginBottom: 8,
  },
  error: {
    color: colors.red,
    marginBottom: 8,
  },
});
