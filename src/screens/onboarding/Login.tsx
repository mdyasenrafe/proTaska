import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import CutstomInput from "../../components/common/CutstomInput";
import CustomText from "../../theme/Text/CustomText";
import { ValidationPassword } from "../../utils/ValidationPassword";
import { ValidationEmail } from "../../utils/ValidationEmail";
import { colors } from "../../theme/colors";
import { Feather } from "@expo/vector-icons";
import Button from "../../components/common/Button";
export default function Login({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordEye, setPasswordEye] = useState<boolean>(true);
  const [error, setError] = useState<errorType>({
    error: false,
    message: "",
    type: "",
  });

  const updateError = (status: boolean, type: string, message: string) => {
    if (message !== "") alert(message);
    setError({
      error: status,
      message: message,
      type: type,
    });
    return;
  };

  const handleLogin = () => {
    const checkEmail = ValidationEmail(email);
    const checkPassword = ValidationPassword(password);
    if (checkEmail.error) {
      updateError(true, "email", checkEmail.message);
      return;
    } else if (checkPassword.error) {
      updateError(true, "password", checkPassword.message);
      return;
    }
  };

  return (
    <SafeAreaView style={fileStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={fileStyles.heading_area}>
          <CustomText preset="h5" style={fileStyles.heading_text}>
            Hi There,
          </CustomText>
          <CustomText>Enter your Email and Password to login</CustomText>
        </View>
        <View>
          <CutstomInput
            label="Email"
            placeholder="Type your email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(e) => {
              setEmail(e);
            }}
            returnKeyType="next"
            style={{
              borderColor: error.type === "email" ? "red" : "lightgrey",
            }}
          />
          <CutstomInput
            label="Password"
            placeholder="type your password"
            onChangeText={(e: any) => {
              setPassword(e);
            }}
            returnKeyType="done"
            showPassword={true}
            showPasswordComponent={
              <TouchableOpacity
                onPress={() => {
                  setPasswordEye(!passwordEye);
                }}
              >
                <Feather
                  name={passwordEye ? "eye-off" : "eye"}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            }
            secureTextEntry={passwordEye}
            style={{
              borderColor:
                error.type === "confirmPassword" ? "red" : "lightgrey",
            }}
          />
        </View>
        {error && (
          <CustomText preset="p3" style={fileStyles.error}>
            {error.message}
          </CustomText>
        )}
        <Button title="Sign in" onPress={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <CustomText preset="p2" style={fileStyles.dont_have_acc}>
            Don't have an account?{" "}
            <CustomText preset="h6" style={{ color: colors.primary }}>
              Sign up
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const fileStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  heading_area: { marginVertical: 24 },
  heading_text: {
    marginBottom: 8,
  },
  error: {
    color: colors.red,
    marginBottom: 8,
  },
  dont_have_acc: {
    textAlign: "center",
    color: colors.gray,
    marginTop: 30,
  },
});
