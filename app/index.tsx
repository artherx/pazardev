import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link, Navigator } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { HelloWave } from "@/components/HelloWave";
export default function index() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const determineHref = () => {
    if (user === "jutulider") {
      return "/(tabs)";
    }
    return ""; // Puedes ajustar esto según tus necesidades.
  };
  return (
    <View style={styles.fondo}>
      <TextInput
        style={styles.input}
        accessibilityLabel="Nombre de usuario"
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        accessibilityLabel="Nombre de usuario"
        value={password}
        onChangeText={setPassword}
      />
      <Link
        href={determineHref()}
        replace={true}
        style={{ backgroundColor: "red", padding: 10 }}
      >
        <Text>dasd</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFEFEF",
  },
  input: {
    width: 250,
    height: 50,
    backgroundColor: "#1F1F1F",
    borderRadius: 10,
    color: "#EFEFEF",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
