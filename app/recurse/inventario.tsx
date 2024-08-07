import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenStackHeaderCenterView } from "react-native-screens";
import { Link, router } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function inventario() {
	return (
		<View>
			<Link href={'/ $router.back.name'}>
				<TabBarIcon name="exit" color="red" size={48} />
			</Link>
			<ScreenStackHeaderCenterView />
			<Text style={{ color: "red" }}>inventario</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
