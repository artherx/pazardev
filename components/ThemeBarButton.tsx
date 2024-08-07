import {
	StyleSheet,
	View,
} from "react-native";
import React, { type ReactNode, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemeBarButtonProps {
    children: ReactNode;
  }

export function ThemeBarButton({children}:ThemeBarButtonProps) {
	const bColor = useThemeColor({}, "primary");

	return (
		<View style={[styles.barra, { backgroundColor: bColor }]}>
            {children}
		</View>
	);
}

const styles = StyleSheet.create({
	barra: {
		flexDirection: "row",
		alignSelf: "center",
		height: 60,
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "80%",
		borderRadius: 10,
	},
});
