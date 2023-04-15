import { GlobalStyles } from "@styles/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 12,
    },
    scheduleOutterContainer: {
        marginVertical: 20,
    },
    scheduleInnerContainer: {
        marginVertical: 14,
    },
    scheduleTitle: {
        fontFamily: "poppins-bold",
        fontSize: 20,
        color: GlobalStyles.colors.primary400,
    },
});
