import Colors from "@styles/colors";
import { GlobalStyles } from "@styles/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  scheduleItemOutterContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 15,
    justifyContent: "center",
    borderLeftWidth: 5,
    borderLeftColor: GlobalStyles.colors.primary400,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  scheduleItemInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serviceText: {
    fontFamily: "poppins-bold",
    fontSize: 22,
  },
  clientText: {
    fontFamily: "poppins-regular",
    fontSize: 16,
  },
  dateTimeText: {
    fontFamily: "poppins-light",
    fontSize: 14,
  },
});
