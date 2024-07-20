import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenStackHeaderCenterView } from "react-native-screens";

export default function inventario() {
	return (
		<View>
			<ScreenStackHeaderCenterView/>
			<Text style={{ color: "red" }}>inventario</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
