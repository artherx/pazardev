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

  return (
    <View style={styles.fondo}>
      
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
