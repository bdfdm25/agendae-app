import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchOutterContainer: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    searchInputField: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 0,
    },
    filterContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 25,
    },
});
