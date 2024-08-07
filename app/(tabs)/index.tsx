import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Button,
  Text,
  Pressable,
  PressableStateCallbackType,
} from "react-native";

export default function HomeScreen() {

  return (
    <ThemedView style={styles.fondo}>
      <ThemedButton title="Productos" onPress={undefined}/>
      <ThemedButton title="Administrar empleados" onPress={undefined}/>
      <ThemedButton title="Administrar WEB" onPress={undefined}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
