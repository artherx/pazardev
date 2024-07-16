import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return <View style={styles.fondo}></View>;
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
