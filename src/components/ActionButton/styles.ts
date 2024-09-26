import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 10,
        maxWidth: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 12,
        color: Colors.text,
        textAlign: "center"
    },
    iconContainer: {
        width: 58,
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 100
    }
})