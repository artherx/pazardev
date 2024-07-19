import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { TItemList } from "@/domain/types/ListButton.type";

interface IListButtonProps {
  lista: TItemList[];
}

export function ListButton({ lista }: IListButtonProps) {
  const navegacion = useRouter();
  return lista.map(({ nombre, route }) => (
    <Pressable
      key={nombre}
      onPress={() => navegacion.navigate(route)}
      style={styles.fondoB}
    >
      <Text style={{ fontSize: 36, fontWeight: "bold", color:"#F5F5F5"}}>{nombre}</Text>
    </Pressable>
  ));
}

const styles = StyleSheet.create({
  fondoB: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#179F8B",
  },
});
