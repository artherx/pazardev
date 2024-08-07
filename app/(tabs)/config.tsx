import { ListButton } from "@/components/buttoms/ListButton";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const usuario: string = "Nombre Usuario";
const tipo: string = "Tipo Usuario";
const empresa: string = "Nombre Empresa";
type ThemedViewProps = {
	lightColor?: string;
	darkColor?: string;
};

export default function ConfigScreem({
	lightColor,
	darkColor,
}: ThemedViewProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'primary')
	return (
		<ThemedView style={styles.fondo}>
			<View
				style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
			>
				<Image
					source={require("@/assets/images/circulo.svg")}
					style={{ width: 100, height: 100, backgroundColor: color, borderRadius:1000,}}
				/>
				<View style={{ marginHorizontal: 10 }}>
					<ThemedText style={{ fontSize: 24 }}>{empresa}</ThemedText>
					<ThemedText style={{ fontSize: 24 }}>{usuario}</ThemedText>
					<ThemedText style={{ fontSize: 18, fontWeight: "light" }}>
						{tipo}
					</ThemedText>
				</View>
			</View>
			<ScrollView style={{ width: "100%" }}>
				<ListButton
					lista={[
						{ nombre: "Inventario", route: "/recurse/inventario" },
						{ nombre: "Productos", route: "/recurse/productos" },
						{ nombre: "Empleados", route: "/recurse/productos" },
						{ nombre: "Administrador web", route: "/recurse/productos" },
						{ nombre: "IA", route: "/recurse/productos" },
						{ nombre: "Cuenta", route: "/recurse/productos" },
					]}
				/>
			</ScrollView>
			<View style={styles.salida}>
				<Link href={"/"} replace={true}>
					<TabBarIcon name="exit" color="red" size={48} />
				</Link>
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	fondo: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	salida: {
		width: "100%",
		alignItems: "flex-end",
		marginEnd: 100,
		marginBottom: 30,
		marginVertical: 10,
	},
});
