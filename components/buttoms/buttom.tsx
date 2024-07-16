import { Pressable, PressableStateCallbackType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function buttomR({title=""}) {

    function eventPressStyle({ pressed }: PressableStateCallbackType) {
        return [styles.boton,{ backgroundColor: pressed ? '#11EBBF':'#83EBBF' }]
      }

      
  return (
    <Pressable onPress={() => {}} style={eventPressStyle}>
      <Text>Productos</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
})