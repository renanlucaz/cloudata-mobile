import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { Colors } from "@/src/constants/Colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarLabelStyle: { fontSize: 14 },
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
            tabBarStyle: {
                padding: 10,
                height: 90
            },
         }}>
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Início',
                    tabBarActiveTintColor: Colors.primary,
                    tabBarIcon: ({ color }) => <Octicons name="home" size={23} color={color} />,
                }}
            />
            <Tabs.Screen
                name="previsions"
                options={{
                    title: 'Previsões',
                    tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color}  />,
                }}
            />
        </Tabs>
    )
}