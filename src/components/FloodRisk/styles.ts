import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 16,
        borderColor: "#c7c7c7",
        borderWidth: 1,
        borderStyle: "dashed",
        marginBottom: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#324244",
        marginLeft: 10
    },
    line: {
        flexDirection: "row"
    },
    label: {
        fontWeight: "700",
        color: "#3d3d3d",
        fontSize: 15
    },
    value: {
        color: "#7d7d7d"
    }
})