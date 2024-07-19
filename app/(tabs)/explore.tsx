import { StyleSheet, View } from "react-native";
import { ListButton } from "@/components/buttoms/ListButton";

export default function TabTwoScreen() {
  return (
    <View style={styles.fondo}>
      <ListButton
        lista={[
          { nombre: "Inventario", route: "/recurse/inventario" },
          { nombre: "Productos", route: "/recurse/productos" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
