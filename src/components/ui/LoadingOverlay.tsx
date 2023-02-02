import { GlobalStyles } from "@styles/styles";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={GlobalStyles.colors.primary500} />
        </View>
    );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
});
