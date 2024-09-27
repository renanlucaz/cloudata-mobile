import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from "./styles";
import { router } from "expo-router";

interface HeaderProps {
    title: string
    backType?: boolean
}

export function Header({ title, backType }: HeaderProps) {
    return (
        <View style={styles.container}>
            {backType ? (
                <TouchableOpacity style={styles.menu} onPress={() => router.replace("/previsions")}>
                    <FontAwesome name="long-arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
            ) : (
                <Entypo name="menu"size={32} color={'#fff'} style={styles.menu} />
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}