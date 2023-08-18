import { View, ActivityIndicator } from "react-native";
import React from "react";
import { screenWidth } from "../../theme/theme";
import { colors } from "../../theme/colors";

export default function LoadingSpinner({
  height,
  width,
  size,
}: {
  height?: string;
  width?: string;
  size?: "small" | "large";
}) {
  return (
    <View
      style={{
        height: height ? parseInt(height) : 200,
        width: width ? parseInt(width) : screenWidth,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator
        size={size == "small" || size == "large" ? size : "small"}
        color={colors.primary}
      />
    </View>
  );
}
