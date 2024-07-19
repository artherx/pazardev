import { ListButton } from "@/components/buttoms/ListButton";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const usuario: string = "Nombre Usuario";
const tipo: string = "Tipo Usuario";
const empresa: string = "Nombre Empresa";
export default function ConfigScreem() {
  return (
    <View style={styles.fondo}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Image
          source={require("@/assets/images/circulo.svg")}
          style={{ width: 100, height: 100 }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 24 }}>{empresa}</Text>
          <Text style={{ fontSize: 24 }}>{usuario}</Text>
          <Text style={{ fontSize: 18, fontWeight: "light" }}>{tipo}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
