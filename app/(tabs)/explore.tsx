import { StyleSheet, View } from "react-native";
import { ListButton } from "@/components/buttoms/ListButton";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.fondo}>
      <ListButton
        lista={[
          { nombre: "Inventario", route: "/recurse/inventario" },
          { nombre: "Productos", route: "/recurse/productos" },
        ]}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
});
