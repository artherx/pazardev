import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.botones}>
              <View style={focused ? styles.backgroundFocuse : null}>
                <TabBarIcon
                  name={focused ? "home" : "home-outline"}
                  color="#1F1F1F"
                  size={focused ? 40 : 28}
                />
              </View>
              <Text style={focused ? {color:'#EFEFEF'} : { fontSize: 0 }}>Inicio</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.botones}>
              <View style={focused ? styles.backgroundFocuse : null}>
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color="#1F1F1F"
                  size={focused ? 40 : 28}
                />
              </View>
              <Text style={focused ? {color:'#EFEFEF'} : { fontSize: 0 }}>explore</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.botones}>
              <View style={focused ? styles.backgroundFocuse : null}>
                <TabBarIcon
                  name={focused ? "ellipsis-vertical-sharp" : "ellipsis-vertical-outline"}
                  color="#1F1F1F"
                  size={focused ? 40 : 28}
                ></TabBarIcon>
              </View>
              <Text style={focused ? {color:'#EFEFEF'} : { fontSize: 0 }}>Mas</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  backgroundFocuse: {
    width: "100%",
    backgroundColor: "#EFEFEF",
    paddingHorizontal:10,
    paddingVertical:5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "#1F1F1F",
  },
  botones: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    height: 80,
    backgroundColor: "#179F8B",
    justifyContent: "center",
  },
});
