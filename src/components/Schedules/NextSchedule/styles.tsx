import { GlobalStyles } from "@styles/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
  scheduleOutterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scheduleInfo: {
    color: GlobalStyles.colors.accent500,
  },
  scheduleHeader: {
    fontSize: 24,
    fontFamily: "poppins-bold",
  },
  scheduleClient: {
    fontSize: 20,
    fontFamily: "poppins-medium",
  },
  scheduleDateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  scheduleTimeContainer: {
    marginTop: 10,
  },
  scheduleDateTime: {
    fontSize: 14,
    fontFamily: "poppins-light",
    paddingLeft: 10,
  },
});
