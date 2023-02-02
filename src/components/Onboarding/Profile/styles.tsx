import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputInnerContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  disableInputColor: {
    backgroundColor: "#d4d4d4",
  },
});
