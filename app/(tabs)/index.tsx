import { ThemedButton } from "@/components/ThemedButton";
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
    <View style={styles.fondo}>
      <ThemedButton title="Productos" onPress={undefined}/>
      <ThemedButton title="Administrar empleados" onPress={undefined}/>
      <ThemedButton title="Administrar WEB" onPress={undefined}/>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
