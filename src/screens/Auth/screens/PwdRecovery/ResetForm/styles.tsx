import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
  },
  inputGroupOuterContainer: {
    marginBottom: 20,
  },
  inputOuterContainer: {
    marginBottom: 16,
  },
  inputInnerContainer: {
    padding: 10,
    borderRadius: 6,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  passwordInputInnerContainer: {
    flexDirection: "row",
  },
  passwordInputField: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
  },
  buttonOuterContainer: {
    marginTop: 20,
    overflow: "hidden",
  },
});
