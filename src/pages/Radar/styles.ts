import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    map: {
        width: "100%",
        height: "100%"
    },
    header: {
        paddingBottom: 15,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    headerText: {
        fontSize: 18,
        color: Colors.title,
        fontWeight: "700",
        textAlign: "center",
        marginLeft: 10,
    },
    pin: {
        maxHeight: 20,
        maxWidth: 20,
    }
})