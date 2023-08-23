import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Typography } from "../../theme/typography";
import { colors } from "../../theme/colors";

interface CustomInputProps {
  placeholder?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  onChangeText?: (text: string) => void;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | undefined;
  style?: object;
  value?: string;
  editable?: boolean;
  maxLength?: number;
  secureTextEntry?: boolean;
  showPassword?: boolean;
  showPasswordComponent?: React.ReactNode;
  input_style?: object;
  returnKeyLabel?: string;
  returnKeyType?: "done" | "go" | "next" | "search" | "send" | undefined;
  onSubmitEditing?: () => void;
  handlePress?: () => void;
  label?: string;
  labelComponent?: React.ReactNode;
  handleBlur?: () => void;
  handleFocus?: () => void;
  icon?: string;
  iconComponent?: React.ReactNode;
}

export default function CutstomInput(props: CustomInputProps) {
  const {
    placeholder,
    autoCapitalize,
    onChangeText,
    keyboardType,
    style,
    value,
    editable,
    maxLength,
    secureTextEntry,
    showPassword,
    showPasswordComponent,
    input_style,
    returnKeyLabel,
    returnKeyType,
    onSubmitEditing,
    handlePress,
    label,
    labelComponent,
    handleBlur,
    handleFocus,
    icon,
    iconComponent,
  } = props;
  return (
    <View>
      {label && <>{labelComponent}</>}
      <View style={[styles.input_container, style]}>
        {icon && <>{iconComponent}</>}
        <TextInput
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          placeholder={placeholder}
          defaultValue={value}
          editable={editable}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          style={[styles.input, input_style]}
          onSubmitEditing={onSubmitEditing}
          returnKeyLabel={returnKeyLabel}
          returnKeyType={returnKeyType}
          onPressIn={handlePress}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {showPassword && <>{showPasswordComponent}</>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "95%",
    height: 50,
    fontSize: 14,
    fontFamily: Typography.regular,
  },
  input_container: {
    width: "100%",
    height: 50,
    fontSize: 16,
    fontFamily: Typography.regular,
    borderColor: "lightgrey",
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
