import { GlobalStyles } from "@styles/styles";
import { Pressable, Text, View, StyleSheet, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function SettingsMenuItem({ itemName, onPress }) {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
                <View style={styles.buttonInnerContainer}>
                    <Text style={styles.buttonText}>{itemName}</Text>
                    {/* <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    /> */}
                    <Ionicons name="arrow-forward-circle-sharp" size={24} color={GlobalStyles.colors.primary400} />
                </View>
            </Pressable>
        </View>
    );
}

export default SettingsMenuItem;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        marginHorizontal: 4,
        marginVertical: 8,
        backgroundColor: "white",
        padding: 14,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    buttonInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonText: {
        fontFamily: "poppins-bold",
        color: GlobalStyles.colors.primary400,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
