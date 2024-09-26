import React from "react";
import { ButtonProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface AppButtonProps extends ButtonProps{
    title: string;
    onPress: () => void;
}

export function Button({title, onPress, ...props}: AppButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} {...props}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}