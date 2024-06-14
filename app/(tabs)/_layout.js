import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ ...color, ...headerOptions }}>
      <Tabs.Screen name="index" options={{ title: "Nos Pizzas", tabBarIcon: ({ size, color }) => (
        <Ionicons name="pizza" size={size} color={color} />
  )}} />
      <Tabs.Screen name="cart" options={{ title: "Commande" , tabBarIcon: ({ size, color }) => (
        <Ionicons name="cart" size={size} color={color} />
        )}} />
      <Tabs.Screen name="scan" options={{ title: "Scanner", headerShown: false, tabBarIcon: ({ size, color }) => (
        <Ionicons name="scan" size={size} color={color} />
      ) }} />
      <Tabs.Screen name="settings" options={{ title: "Paramètres", tabBarIcon: ({ size, color }) => (
        <Ionicons name="settings" size={size} color={color} />
   ) }} />
    </Tabs>
  );
}

const color = {
  tabBarActiveTintColor: '#AB9B8B',
  tabBarInactiveTintColor: '#BBBBBB',
}

const headerOptions = {
  headerTitleAlign: "center",
  headerStyle: {backgroundColor: "#C0B9B0"}
  
}
