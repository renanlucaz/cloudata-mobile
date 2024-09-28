import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary
    },
    content: {
        backgroundColor: Colors.background,
    },
    form: {
        paddingHorizontal: 20,
        marginTop: -25,
    },
    address: {
        marginTop: 40,
        gap: 20
    },
    line: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-between"
    }
})