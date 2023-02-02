import { GlobalStyles } from "@styles/styles";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    rootContainer: {
        paddingVertical: 10,
    },
    calendarList: {
        alignItems: "center",
        marginTop: 10,
    },
    active: {
        backgroundColor: GlobalStyles.colors.primary400,
    },
    calendarDayOutterContainer: {
        backgroundColor: "white",
        borderRadius: 25,
        width: 45,
        height: 70,
        marginVertical: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    calendarDayInnerContainer: {
        alignItems: "center",
    },
    activeText: {
        color: GlobalStyles.colors.accent500,
    },
    monthDayText: {
        fontFamily: "poppins-bold",
        fontSize: 16,
    },
    weekDayText: {
        fontFamily: "poppins-light",
        fontSize: 12,
    },

    item: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    itemText: {
        color: "#888",
        fontSize: 16,
    },
});
