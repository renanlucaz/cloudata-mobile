import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },
    content: {
        backgroundColor: Colors.background,
    },
    info: {
        marginHorizontal: 20,
    },
    dashboardTitleContainer: {
        flexDirection: "row",
        gap: 12,
        marginBottom: 12
    },
    dashboardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18
    },
    dashboardRowItem: {
        gap: 12,
        justifyContent: "center",
    },
    dashboardRowTitle: {
        fontWeight: "600"
    },
    dashboard: {
        width: "100%",
        padding: 14,
        marginTop: -15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    dashboardTitle: {
        color: Colors.title,
        fontSize: 22,
        fontWeight: "700"
    },
    progressBarContainer: {
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center", 
        minWidth: "100%" ,
        paddingVertical: 25
    },
    progressBar: {
        
    },
    percentual: {
        position: "absolute",
        color: "#fff",
        top: "50%",
        left: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    actions: {
        marginTop: 16,
        width: "100%",
        padding: 14,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    news: {
        marginTop: 10
    }
})