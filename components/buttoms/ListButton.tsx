import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import type { TItemList } from "@/domain/types/ListButton.type";
import { ThemedText } from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface IListButtonProps {
  lista: TItemList[];
}

export function ListButton({ lista }: IListButtonProps) {
  const navegacion = useRouter();
  const color = useThemeColor({},"secondary")
  return lista.map(({ nombre, route }) => (
    <Pressable
      key={nombre}
      onPress={() => navegacion.navigate(route)}
      style={[styles.fondoB ,{backgroundColor:color}]}
    >
      <ThemedText type="defaultSemiBold">{nombre}</ThemedText>
    </Pressable>
  ));
}

const styles = StyleSheet.create({
  fondoB: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
