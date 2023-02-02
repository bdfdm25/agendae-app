import { StyleSheet, View } from "react-native";

function Card({ children, color }) {
    return <View style={[styles.container, { backgroundColor: color }]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginVertical: 20,
        padding: 20,
        elevation: 6,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
});
