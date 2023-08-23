import React from "react";
import { StyleSheet, TextStyle, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import CustomText from "../../theme/Text/CustomText";
import { screenWidth } from "../../theme/theme";

interface buttonProps {
  title: string;
  style?: TextStyle;
  onPress?: () => void;
  disable?: boolean;
  textStyle?: TextStyle;
}

export default function Button(props: buttonProps) {
  const { title, style: customStyle, onPress, disable, textStyle } = props;
  return (
    <TouchableOpacity
      style={[styles.button, styles.button, customStyle]}
      onPress={onPress}
      disabled={disable}
    >
      <CustomText preset="p3_medium" style={[styles.button_text, textStyle]}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: colors.primary,
    width: screenWidth - 32,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    color: colors.white,
  },
});
