import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: "40%",
  },
  inputContainerInfo: {
    marginTop: 10,
  },
  inputContainerInfoText: {
    fontFamily: "poppins-light",
  },
  inputOuterContainer: {
    marginVertical: 16,
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
  buttonOuterContainer: {
    marginTop: 20,
    overflow: "hidden",
  },
});
