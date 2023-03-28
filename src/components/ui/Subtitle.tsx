import { StyleSheet, Text } from "react-native";
function Subtitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
});
