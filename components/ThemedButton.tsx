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
import { useThemeColor } from "@/hooks/useThemeColor";

type TProps = PressableProps & {
	title?: string;
	lightColor?: string;
	darkColor?: string;
};

export function ThemedButton({ title = "",lightColor, darkColor, ...rest }: TProps) {
	const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'butttonColor');
	const backgroundColorP = useThemeColor({ light: lightColor, dark: darkColor }, 'butttonColorP');
	const text = useThemeColor({ light: lightColor, dark: darkColor }, 'textB');
	function eventPressStyle({ pressed }: PressableStateCallbackType) {
		return [styles.boton, { backgroundColor: pressed ? backgroundColorP : backgroundColor }];
	}
	return (
		<Pressable style={eventPressStyle } {...rest}>
			<ThemedText style={{color:text}} >{title}</ThemedText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	boton: {
		padding:25,
		borderRadius: 25,
		alignItems:"center",
		justifyContent: "center"
	},
});
