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

export default function HomeScreen() {

  function eventPressStyle({ pressed }: PressableStateCallbackType) {
    return [styles.boton,{ backgroundColor: pressed ? '#11EBBF':'#83EBBF' }]
  }

  return (
    <View style={styles.fondo}>
      <Pressable onPress={() => {}} style={eventPressStyle}>
        <Text>Productos</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={eventPressStyle}>
        <Text>Productos</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={eventPressStyle}>
        <Text>Productos</Text>
      </Pressable>
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
  boton: {
    display: "flex",
    width: 250,
    height: 120,
    borderRadius: 25,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
});
