import { GlobalStyles } from "@styles/styles";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 25,
    },
    titleContainer: {
        marginBottom: 50,
    },
    inputOuterContainer: {
        marginBottom: 50,
    },
    inputInnerContainer: {
        flexDirection: "row",
        marginBottom: 20,
        padding: 10,
        borderRadius: 6,
        elevation: 2,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    passwordInputField: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 0,
    },
    forgotPasswordText: {
        fontFamily: "poppins-light",
        fontSize: 12,
        textDecorationLine: "underline",
    },
    buttonOuterContainer: {
        overflow: "hidden",
    },
    signUpCallContainer: {
        marginVertical: 20,
        alignItems: "center",
    },
    signUpCallText: {
        fontFamily: "poppins-light",
        fontSize: 12,
    },
    signUpCallLink: {
        fontFamily: "poppins-bold",
        textDecorationLine: "underline",
        color: GlobalStyles.colors.primary400,
    },
});
