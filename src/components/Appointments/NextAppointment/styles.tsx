import { GlobalStyles } from "@styles/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pressed: {
        opacity: 0.85,
    },
    appointmentOutterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    appointmentInfo: {
        color: GlobalStyles.colors.accent500,
    },
    appointmentHeader: {
        fontSize: 24,
        fontFamily: "poppins-bold",
    },
    appointmentClient: {
        fontSize: 20,
        fontFamily: "poppins-medium",
    },
    appointmentDateTimeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    appointmentTimeContainer: {
        marginTop: 10,
    },
    appointmentDateTime: {
        fontSize: 14,
        fontFamily: "poppins-light",
        paddingLeft: 10,
    },
});
