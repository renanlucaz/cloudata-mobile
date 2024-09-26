import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingTop: 20,
        paddingBottom: 50,
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
        top: 20,
        left: 20,
    }
})