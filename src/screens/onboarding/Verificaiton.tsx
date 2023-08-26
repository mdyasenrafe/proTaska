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
        <Feather
          name="arrow-left"
          size={24}
          color={colors.primary}
          onPress={() => navigation.goBack()}
          style={{ marginBottom: 8 }}
        />
        <CustomText style={styles.heading_text} preset="h3">
          Verification
        </CustomText>
      </View>
      <CutstomInput
        label="Email"
        placeholder="Type your email"
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
  heading_area: { marginBottom: 24 },
  heading_text: {
    marginBottom: 8,
  },
  error: {
    color: colors.red,
    marginBottom: 8,
  },
});