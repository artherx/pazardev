import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";

type TProps = PressableProps & {
  title?: string;
};

export function ButtomR({ title = "", ...rest }: TProps) {
  function eventPressStyle({ pressed }: PressableStateCallbackType) {
    return [styles.boton, { backgroundColor: pressed ? "#11EBBF" : "#83EBBF" }];
  }

  return (
    <Pressable style={eventPressStyle} {...rest}>
      <Text style={{ fontSize: 36,fontWeight:"regular", alignItems: "center", textAlign: "center" }}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    display: "flex",
    width: 250,
    height: 120,
    borderRadius: 25,
    textAlignVertical: "center",
    justifyContent: "center",
  },
});
