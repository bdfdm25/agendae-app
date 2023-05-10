import { Platform, StatusBar } from "react-native";

export const GlobalStyles = {
  colors: {
    primary50: "#E4D9FD",
    primary100: "#C6AFFC",
    primary200: "#A281F0",
    primary300: "#5721D4",
    primary400: "#3E04C3",
    primary500: "#2D0689",
    primary550: "#200364",
    primary600: "#115173",
    primary700: "#053F5E",
    primary800: "#022C43",
    accent500: "#FFD700",
    switchTrackDisable: "#767577",
    switchTrackEnable: "#3E04C3",
    switchThumbEnable: "#FFD700",
    switchThumbDisable: "#F4F3F4",
    switchIosBackground: "#3E3E3E",
    inputPlaceholderColor: "#767577",
  },
  rootContainer: {
    flex: 1,
    marginHorizontal: 18,
    marginTop: 40,
    paddingTop: Platform.OS === "android" ? 15 : 0,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontFamily: "poppins-bold",
    fontSize: 16,
  },
  regularTitle: {
    fontFamily: "poppins-regular",
    fontSize: 18,
  },
  inputField: {
    padding: 3,
    width: "100%",
  },
  inputErrorMessage: {
    fontFamily: "poppins-light",
    color: "red",
  },
  inputErrorStyle: {
    borderWidth: 2,
    borderColor: "#FF0000",
  },
};
