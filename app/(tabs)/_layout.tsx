import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const backgroundColor = useThemeColor({ dark: undefined }, "background");
	const text = useThemeColor({ dark: undefined }, "text");

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: true,
				headerStyle: [{ backgroundColor: backgroundColor, elevation: 0 }],
				headerTitleStyle: [{ color: text, fontSize: 20, fontWeight: "bold" }],
				tabBarStyle: styles.tabLabel,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: "Inicio",
					tabBarIcon: () => null,
					tabBarLabel: ({ color, focused }) => (
						<View
							style={[
								styles.botones,
								Platform.OS === "android" ? styles.botonesAndroid : {},
							]}
						>
							<View style={focused ? styles.backgroundFocuse : null}>
								<TabBarIcon
									name={focused ? "home" : "home-outline"}
									color="#1F1F1F"
									size={focused ? 40 : 28}
								/>
							</View>
							<Text style={focused ? { color: "#EFEFEF" } : { fontSize: 0 }}>
								Inicio
							</Text>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					headerTitle: "Recursos",
					tabBarIcon: () => null,
					tabBarLabel: ({ color, focused, position }) => (
						<View
							style={[
								styles.botones,
								Platform.OS === "android" ? styles.botonesAndroid : {},
							]}
						>
							<View style={focused ? styles.backgroundFocuse : null}>
								<TabBarIcon
									name={focused ? "storefront" : "storefront-outline"}
									color="#1F1F1F"
									size={focused ? 40 : 28}
								/>
							</View>
							<Text style={focused ? { color: "#EFEFEF" } : { fontSize: 0 }}>
								Recursos
							</Text>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="emplemen"
				options={{
					headerTitle: "Empleados",
					tabBarIcon: () => null,
					tabBarLabel: ({ color, focused, position }) => (
						<View
							style={[
								styles.botones,
								Platform.OS === "android" ? styles.botonesAndroid : {},
							]}
						>
							<View style={focused ? styles.backgroundFocuse : null}>
								<TabBarIcon
									name={focused ? "people" : "people-outline"}
									color="#1F1F1F"
									size={focused ? 40 : 28}
								/>
							</View>
							<Text style={focused ? { color: "#EFEFEF" } : { fontSize: 0 }}>
								Empleados
							</Text>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="config"
				options={{
					headerTitle: "Configuraciones",
					tabBarIcon: () => null,
					tabBarLabel: ({ color, focused }) => (
						<View
							style={[
								styles.botones,
								Platform.OS === "android" ? styles.botonesAndroid : {},
							]}
						>
							<View style={focused ? styles.backgroundFocuse : null}>
								<TabBarIcon
									name={
										focused
											? "ellipsis-vertical-sharp"
											: "ellipsis-vertical-outline"
									}
									color="#1F1F1F"
									size={focused ? 40 : 28}
								/>
							</View>
							<Text style={focused ? { color: "#EFEFEF" } : { fontSize: 0 }}>
								Mas
							</Text>
						</View>
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	backgroundFocuse: {
		backgroundColor: "#EFEFEF",
		paddingHorizontal: 10,
		paddingVertical: 5,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		color: "#1F1F1F",
		// Sombra para iOS
		shadowColor: "#000", // Color de la sombra
		shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
		shadowOpacity: 0.25, // Opacidad de la sombra
		shadowRadius: 3.84, // Radio de la sombra
		// Sombra para Android
		elevation: 5, // Elevación para sombra en Android
	},
	botones: {
		alignItems: "center",
		justifyContent: "center",
	},
	botonesAndroid: {
		position: "absolute",
		bottom: 20,
	},
	tabLabel: {
		height: 80,
		backgroundColor: "#179F8B",
		borderColor: "#179F8B",
	},
});
