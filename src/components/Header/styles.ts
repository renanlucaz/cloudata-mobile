import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "relative"
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    menu: {
        position: "absolute",
        left: 20,
    }
})