import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

type input = TextInputProps & {
	lightColor?: string;
	darkColor?: string;
	type?: "default";
};
export function ThemedInput({ lightColor, darkColor, type, ...rest }: input) {
	const background = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"primary",
	);
	const text = useThemeColor({ light: lightColor, dark: darkColor }, "text");
	return (
		<TextInput
			style={[
				{ backgroundColor: background, color: text },
				type === "default" ? styles.default : undefined,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	default: {
		width: 250,
		height: 50,
		borderRadius: 10,
		marginVertical: 20,
		paddingHorizontal: 10,
	},
});
