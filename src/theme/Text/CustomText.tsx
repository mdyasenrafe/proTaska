import { Text, StyleSheet } from "react-native";
import React from "react";
import { presets, TextPresets } from "./Text.preset";

interface TextPropsType {
  children: React.ReactNode;
  preset?: TextPresets;
  style?: any;
}

export default function CustomText(props: TextPropsType) {
  const { children, preset = "default", style } = props;
  const styles = StyleSheet.compose(style, presets[preset]);
  return <Text style={styles}>{children}</Text>;
}
