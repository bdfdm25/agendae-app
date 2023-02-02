import { IconButton, Card } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "@styles/styles";
import { StyleSheet, Text, View } from "react-native";

function ErrorOverlay() {
    const navigation = useNavigation();

    function navigationHandler() {
        navigation.goBack();
    }

    return (
        <View style={[GlobalStyles.rootContainer]}>
            <IconButton onPress={navigationHandler} icon="chevron-back" size={24} />
            <View style={styles.errorContainer}>
                <Ionicons name="close-circle-outline" size={120} color={GlobalStyles.colors.primary400} />

                <Card color={GlobalStyles.colors.accent500}>
                    <Text style={styles.errorText}>Ops! Algo de errado não esta certo. Você poderia tentar novamente?</Text>
                </Card>
            </View>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    errorContainer: {
        marginTop: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        textAlign: "center",
        fontFamily: "poppins-bold",
        fontSize: 18,
        color: GlobalStyles.colors.primary400,
    },
});
