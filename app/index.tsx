import {
	StyleSheet,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedInput } from "@/components/ThemedInput";
export default function index() {
	const navigation = useRouter();
	const [user, setUser] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<ThemedView style={styles.fondo}>
			<ThemedInput
				autoCapitalize="none"
				placeholder="Nombre de usuario"
				value={user}
				onChangeText={setUser}
				type="default"
			/>
			<ThemedInput
				type="default"
				autoCapitalize="none"
				placeholder="Contraseña"
				value={password}
				onChangeText={setPassword}
			/>
			<ThemedButton
				title="Aceptar"
				onPress={() => {
					if (user === "") return navigation.replace("/(tabs)");
					alert("CONTRASEÑA O USUARIO EQUIVOCADO");
				}}
			/>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	fondo: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
