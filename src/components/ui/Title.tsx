import { StyleSheet, Text } from "react-native";
function Title({ children, color }) {
    return <Text style={[styles.title, { color: color }]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "poppins-bold",
        fontSize: 32,
    },
});
