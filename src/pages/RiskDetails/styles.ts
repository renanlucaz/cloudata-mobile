import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },
      cardContainer: {
        paddingHorizontal: 20,
        marginTop: -20
      },
      content: {
        backgroundColor: Colors.background,
      },
      titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
      },
      title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.title,
        marginLeft: 5
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      column: {
        flexDirection: 'column',
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.title,
        marginBottom: 5,
      },
      value: {
        fontSize: 14,
        color: Colors.text,
        lineHeight: 20
      },
})