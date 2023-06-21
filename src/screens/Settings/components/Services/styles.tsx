import { GlobalStyles } from "@styles/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileSection: {
    marginVertical: 12,
  },
  logOutOutterContainer: {
    marginTop: 30,
  },
  logOutInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  logOutText: {
    color: GlobalStyles.colors.primary400,
    fontSize: 20,
    fontFamily: "poppins-medium",
    marginRight: 6,
  },
});
