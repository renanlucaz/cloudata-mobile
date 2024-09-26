import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 20,
    },
    selectBox: {
      backgroundColor: "#fff",
      padding: 18,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 2,
          height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 1.5,
      elevation: 2,
    },
    selectedText: {
      fontSize: 14,
      color: "#333",
    },
    arrow: {
      fontSize: 16,
      color: "#333",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
      width: "80%",
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 10,
      maxHeight: 250,
    },
    option: {
      padding: 12,
      borderBottomColor: "#d1d5da",
    },
    optionText: {
      fontSize: 14,
      color: "#333",
    },
    
  });