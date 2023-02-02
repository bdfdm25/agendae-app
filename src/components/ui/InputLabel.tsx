import { StyleSheet, Text, View } from "react-native";

function InputLabel({ label }) {
    return (
        <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
        </View>
    );
}

export default InputLabel;

const styles = StyleSheet.create({
    inputLabelContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
    },
    inputLabel: {
        fontFamily: "poppins-light",
        fontSize: 16,
        // paddingLeft: 10,
    },
});
