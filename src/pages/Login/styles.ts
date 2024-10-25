import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "92%",
        position: "relative",
        margin: "auto",
    },
    logoContainer: {
        position: "absolute",
        top: 80,
    },
    logoText: {
        fontWeight: "700",
        fontSize: 24,
        letterSpacing: 3,
        fontFamily: "Inter-Regular"
    },
    formContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        minWidth: "100%",
    },
    loginTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 30
    },
    loginDescription: {
        marginTop: 5,
        fontSize: 14,
    },
    formFields: {
        minWidth: "100%",
        gap: 16,
        marginTop: 24
    },
    terms: {
        marginTop: 42,
        alignItems: "center"
    },
    termsText: {
        color: "#828282",
        textAlign: "center"
    },
    termsTextBold: {
        fontWeight: "700",
        color: "#444"
    }
})