import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    paddingTop: 20,
    marginBottom: Platform.OS === "android" ? 50 : 30,
  },
});
