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
	const textH = useThemeColor({ light: lightColor, dark: darkColor }, "textholder");
	return (
		<TextInput
			placeholderTextColor={textH}
			selectionColor={background}
			style={[
				{ borderColor:background, borderStyle:"solid", borderWidth:2, backgroundColor: "transparent", color: text },
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
