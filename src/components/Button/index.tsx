import React from "react";
import { ActivityIndicator, ButtonProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface AppButtonProps extends ButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
}

export function Button({ title, onPress, isLoading, ...props }: AppButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} {...props}>
            <Text style={styles.buttonText}>
                {isLoading ? (
                    <ActivityIndicator color={"#fff"} size="small" />
                ) : title}
            </Text>
        </TouchableOpacity>
    )
}