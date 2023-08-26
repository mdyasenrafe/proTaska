import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../../theme/Text/CustomText";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { colors } from "../../theme/colors";
import CutstomInput from "../../components/common/CutstomInput";
import { Feather } from "@expo/vector-icons";
import Button from "../../components/common/Button";
import { ValidationName } from "../../utils/ValidationName";
import { ValidationEmail } from "../../utils/ValidationEmail";
import { ValidationPassword } from "../../utils/ValidationPassword";
import { ValidationConfrimPassword } from "../../utils/ValidationConfrimPassword";

export default function Signup({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [passwordEye, setPasswordEye] = useState<boolean>(false);
  const [confirmPasEye, setConfirmPasEye] = useState<boolean>(false);

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

  const inputData = [
    {
      placeholder: "Type your name",
      value: name,
      onChangeText: (text: string) => {
        setName(text);
        updateError(false, "", "");
      },
      returnKeyType: "next",
      style: {
        borderColor: error.type === "name" ? "red" : "lightgrey",
      },
      secureTextEntry: false,
      showPassword: false,
      keyboardType: "default",
    },
    {
      placeholder: "Type your email",
      value: email,
      onChangeText: (text: string) => {
        setEmail(text);
        updateError(false, "", "");
      },
      returnKeyType: "next",
      style: {
        borderColor: error.type === "email" ? "red" : "lightgrey",
      },
      secureTextEntry: false,
      showPassword: false,
      keyboardType: "email-address",
    },
    {
      placeholder: "Password",
      value: password,
      onChangeText: (text: string) => {
        setPassword(text);
        updateError(false, "", "");
      },
      returnKeyType: "next",
      style: {
        borderColor: error.type === "password" ? "red" : "lightgrey",
      },
      secureTextEntry: !passwordEye,
      showPassword: true,
      keyboardType: "default",
      showPasswordComponent: (
        <TouchableOpacity
          onPress={() => {
            setPasswordEye(!passwordEye);
          }}
        >
          <Feather
            name={passwordEye ? "eye" : "eye-off"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      ),
    },
    {
      placeholder: "Type your password again",
      value: confirmPassword,
      onChangeText: (text: string) => {
        setConfirmPassword(text);
        updateError(false, "", "");
      },
      returnKeyType: "next",
      style: {
        borderColor: error.type === "confirmPassword" ? "red" : "lightgrey",
      },
      secureTextEntry: !confirmPasEye,
      showPassword: true,
      keyboardType: "default",
      showPasswordComponent: (
        <TouchableOpacity
          onPress={() => {
            setConfirmPasEye(!confirmPasEye);
          }}
        >
          <Feather
            name={confirmPasEye ? "eye" : "eye-off"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      ),
    },
  ];

  const handleSignup = () => {
    const checkName = ValidationName(name, setName);
    const checkEmail = ValidationEmail(email);
    const checkPassword = ValidationPassword(password);
    const checkConfirmPassword = ValidationConfrimPassword(
      password,
      confirmPassword
    );
    navigation.navigate("Verification");
    if (checkName.error) {
      updateError(true, "name", checkName.message);
      return;
    } else if (checkEmail.error) {
      updateError(true, "email", checkEmail.message);
      return;
    } else if (checkPassword.error) {
      updateError(true, "password", checkPassword.message);
      return;
    } else if (checkConfirmPassword.error) {
      updateError(true, "confirmPassword", checkConfirmPassword.message);
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heading_area}>
          <Feather
            name="arrow-left"
            size={24}
            color={colors.primary}
            onPress={() => navigation.goBack()}
            style={{ marginBottom: 24 }}
          />
          <CustomText preset="h5">Let's make you member of</CustomText>
          <CustomText preset="h4">ProTaska</CustomText>
        </View>
        {inputData.map((item, index) => {
          return (
            <CutstomInput
              key={index}
              label={item.placeholder}
              placeholder={item.placeholder}
              autoCapitalize="none"
              keyboardType={item?.keyboardType as any}
              onChangeText={item.onChangeText}
              style={item.style}
              secureTextEntry={item.secureTextEntry}
              showPassword={item.showPassword}
              showPasswordComponent={item.showPasswordComponent}
            />
          );
        })}
        {error.error && (
          <CustomText preset="p3_medium" style={styles.error}>
            {error.message}
          </CustomText>
        )}
        <Button
          title="Sign up"
          style={{
            marginTop: 24,
          }}
          onPress={handleSignup}
        />
      </ScrollView>
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
