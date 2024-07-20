import {
	StyleSheet,
	TextInput,
	View,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { ButtomR } from "@/components/buttoms/buttom";
export default function index() {
	const navigation = useRouter();
	const [user, setUser] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<View style={styles.fondo}>
			<TextInput
				autoCapitalize="none"
				style={styles.input}
				accessibilityLabel="Nombre de usuario"
				value={user}
				onChangeText={setUser}
			/>
			<TextInput
				autoCapitalize="none"
				style={styles.input}
				accessibilityLabel="Nombre de usuario"
				value={password}
				onChangeText={setPassword}
			/>
			<ButtomR
				title="Aceptar"
				onPress={() => {
					if (user === "") return navigation.replace("/(tabs)");
					alert("CONTRASEÑA O USUARIO EQUIVOCADO");
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	fondo: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#EFEFEF",
	},
	input: {
		width: 250,
		height: 50,
		backgroundColor: "#1F1F1F",
		borderRadius: 10,
		color: "#EFEFEF",
		marginVertical: 20,
		paddingHorizontal: 10,
	},
});
