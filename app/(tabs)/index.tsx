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

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {ButtomR} from "@/components/buttoms/buttom";

export default function HomeScreen() {

  return (
    <View style={styles.fondo}>
      <ButtomR title="Productos" onPress={undefined}/>
      <ButtomR title="Administrar empleados" onPress={undefined}/>
      <ButtomR title="Administrar WEB" onPress={undefined}/>
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
