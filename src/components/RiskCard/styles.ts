import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f3f8fb",
    padding: 15,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2e2f33",
  },
  address: {
    fontSize: 13,
    color: "#5c5f63",
    marginVertical: 5,
  },
  riskContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  riskIndicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  riskText: {
    fontSize: 13,
    color: "#333",
  },
  progressCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
