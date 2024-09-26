import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo"
import { styles } from "./styles";

interface HeaderProps {
    title: string
}

export function Header({ title }: HeaderProps) {
    return (
        <View style={styles.container}>
            <Entypo name="menu"size={32} color={'#fff'} style={styles.menu} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}