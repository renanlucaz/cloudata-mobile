import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/src/constants/Colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            tabBarLabelStyle: { fontSize: 14 },
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
            tabBarStyle: {
                height: 90,
                padding: 0
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
            <Tabs.Screen
                name="radar"
                options={{
                    title: 'Radar',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="radar" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={22} color={color}/>,
                }}
            />
        </Tabs>
    )
}