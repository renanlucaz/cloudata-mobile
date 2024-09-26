import React from "react"
import { TextInput, TextInputProps } from "react-native"
import { styles } from "./styles";

interface AppInputProps extends TextInputProps{
    title: string;
    value: string;
}

export function Input({ title, value, ...props }: AppInputProps) {
    return (
        <TextInput style={styles.input} placeholder={title} {...props} />
    )
}