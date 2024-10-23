import { FloodRisk } from "@/src/components/FloodRisk";
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
    },
    results: {
        marginHorizontal: 20,
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    resultsText: {
        color: "#666",
        marginHorizontal: 10
    },
    list: {
        marginHorizontal: 20,
        marginTop: 15,
    },
    line: {
        borderWidth: 0.5,
        borderColor: "#DAD7E0",
        flex: 1
    },
    floodRisk: {
        marginHorizontal: 20,
    }
})