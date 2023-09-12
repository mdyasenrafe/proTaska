import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../../theme/Text/CustomText";
import { colors } from "../../theme/colors";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import CutstomInput from "../../components/common/CutstomInput";
import Button from "../../components/common/Button";
import { ValidationEmail } from "../../utils/ValidationEmail";

export default function ForgetPassword({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [email, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSend = () => {
    const checkEmail = ValidationEmail(email);
    if (checkEmail.error) {
      setError(checkEmail.message);
      return;
    } else {
      setError("");
      Alert.alert("Success", "Please check your email", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Verification"),
        },
      ]);
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
          style={{ marginBottom: 8, marginRight: 8 }}
        />
        <CustomText style={styles.heading_text} preset="h3">
          Forget Password
        </CustomText>
      </View>
      <CutstomInput
        label="Email"
        placeholder="Type your email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={(e) => {
          setCode(e);
          setError("");
        }}
        style={{
          borderColor: error ? "red" : "lightgrey",
        }}
      />

      {error && (
        <CustomText style={styles.error} preset="p3">
          {error}
        </CustomText>
      )}
      <CustomText
        preset="p4"
        style={{
          color: "grey",
        }}
      >
        We will send you an code to reset your password
      </CustomText>
      <Button title="Send" onPress={handleSend} style={{ marginTop: 24 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  heading_area: {
    marginVertical: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  heading_text: {
    marginBottom: 8,
  },
  error: {
    color: colors.red,
    marginBottom: 8,
  },
});
