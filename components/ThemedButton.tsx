import {
	Pressable,
	type PressableProps,
	type PressableStateCallbackType,
	StyleSheet,
	Text,
	type TextProps,
} from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

type TProps = PressableProps & {
	title?: string;
};

export function ThemedButton({ title = "", ...rest }: TProps) {
	function eventPressStyle({ pressed }: PressableStateCallbackType) {
		return [styles.boton, { backgroundColor: pressed ? "#11EBBF" : "#83EBBF" }];
	}

	return (
		<Pressable style={eventPressStyle} {...rest}>
			<ThemedText  >{title}</ThemedText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	boton: {
		width: 250,
		height: 120,
		borderRadius: 25,
		textAlignVertical: "center",
		justifyContent: "center",
	},
});
