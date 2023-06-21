import { GlobalStyles } from "@styles/styles";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  titleContainer: {
    marginBottom: 20,
  },
  inputOuterContainer: {
    marginBottom: 20,
  },
  inputInnerContainer: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 10,
    borderRadius: 6,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  passwordInputField: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
  },
  profileSelectorOutterContainer: {
    marginTop: 5,
  },
  profileSelectorTitle: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: GlobalStyles.colors.primary400,
  },
  profileTitle: {
    fontFamily: "poppins-semibold",
    fontSize: 14,
  },
  switchGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 10 : 0,
  },
  iosSwitchSize: {
    transform: Platform.OS === "ios" ? [{ scaleX: 0.6 }, { scaleY: 0.6 }] : [],
  },
  buttonOuterContainer: {
    marginTop: 20,
    overflow: "hidden",
    alignItems: "center",
  },
  signInCallContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  signInCallText: {
    fontFamily: "poppins-light",
    fontSize: 12,
  },
  signInCallLink: {
    fontFamily: "poppins-bold",
    textDecorationLine: "underline",
    color: GlobalStyles.colors.primary400,
  },
});
