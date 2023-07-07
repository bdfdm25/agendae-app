import { GlobalStyles } from "@styles/styles";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
  scheduleContainer: {
    flex: 1,
    paddingTop: 20,
    marginBottom: Platform.OS === "android" ? 50 : 30,
  },
  homeCard: {
    width: Platform.OS === "android" ? 180 : 160,
    height: 100,
    backgroundColor: GlobalStyles.colors.primary400,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  homeCardText: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    paddingLeft: 5,
    color: GlobalStyles.colors.accent500,
  },
});
