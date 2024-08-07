import {
	Pressable,
	type PressableProps,
	type PressableStateCallbackType,
	StyleSheet,
	Text,
	type TextProps,
} from "react-native";
import type React from "react";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import type { Ionicons } from "@expo/vector-icons";
import { TabBarIcon } from "./navigation/TabBarIcon";

type TProps = PressableProps & {
	title?: string;
	lightColor?: string;
	darkColor?: string;
	name?: React.ComponentProps<typeof Ionicons>["name"];
	size?: number;
};

export function ThemedButtonIcon({
	title = "",
	lightColor,
	darkColor,
	name = "add-sharp",
	size = 28,
	...rest
}: TProps) {
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background",
	);
	const backgroundColorP = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"butttonColorP",
	);
	const ico = useThemeColor({}, "icon");
	const text = useThemeColor({ light: lightColor, dark: darkColor }, "textB");
	function eventPressStyle({ pressed }: PressableStateCallbackType) {
		return [
			styles.bot,
			{ backgroundColor: pressed ? backgroundColorP : backgroundColor },
		];
	}
	return (
		<Pressable style={eventPressStyle} {...rest}>
			<TabBarIcon name={name} color={ico} size={size} />
			<ThemedText style={{ color: text }}>{title}</ThemedText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	bot: {
		height: "80%",
		paddingHorizontal: 5,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
});
