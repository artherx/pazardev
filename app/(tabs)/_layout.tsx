import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle:styles.tabLabel
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} 
            color={color} size={focused ? 40:28} 
            style={focused? styles.backgroundFocuse:styles.backgroundNone
          }/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} 
            color={color} size={focused ? 40:28} 
            style={focused? styles.backgroundFocuse:styles.backgroundNone} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: 'Configuraciones',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} 
            color={'1F1F1F'} size={focused ? 40:28} 
            style={focused? styles.backgroundFocuse:styles.backgroundNone}/>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  backgroundFocuse:{
    width:85,
    height:80,
    backgroundColor: '#EFEFEF',
    alignContent:'center',
    justifyContent: 'center',
    borderRadius:10,
  },
  backgroundNone:{
    
  },
  tabLabel:{
    height: 90,
    backgroundColor: '#179F8B',
    justifyContent: 'center',
  }
})
