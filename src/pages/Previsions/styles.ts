import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
    },
    content: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    input: {
        marginTop: -48
    }
})