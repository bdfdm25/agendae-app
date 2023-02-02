import { GlobalStyles } from "@styles/styles";
import { StyleSheet, View } from "react-native";

function Divider() {
    return <View style={styles.divider}></View>;
}

export default Divider;

const styles = StyleSheet.create({
    divider: {
        borderBottomColor: GlobalStyles.colors.primary400,
        borderBottomWidth: 1,
        marginBottom: 20,
    },
});
