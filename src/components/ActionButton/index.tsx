import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import { Colors } from "@/src/constants/Colors";

interface ActionButtonsProps extends TouchableOpacityProps {
    icon: JSX.Element
    title: string;
    action: () => void
}

export function ActionButton({ icon, title, action, ...props }: ActionButtonsProps) {
    return (
        <TouchableOpacity onPress={action} style={styles.container} {...props}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}