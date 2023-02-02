import { GlobalStyles } from "@styles/styles";
import { Pressable, StyleSheet, View, ActivityIndicator } from "react-native";
function LoadingButton() {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} disabled={true}>
                <View>
                    <ActivityIndicator size="small" color={GlobalStyles.colors.accent500} />
                </View>
            </Pressable>
        </View>
    );
}

export default LoadingButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
        paddingVertical: 18,
        paddingHorizontal: 16,
        elevation: 2,
    },
});
