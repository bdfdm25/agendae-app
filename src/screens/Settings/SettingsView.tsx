import { Title } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import SettingsMenuItem from "./components/ui/SettingsMenuItem";
import { styles } from "./styles";

export function SettingsView({ navigation, logOutHandler }) {
    return (
        <SafeAreaView style={[GlobalStyles.rootContainer]}>
            <Title color={GlobalStyles.colors.primary400}>Configurações</Title>
            <View style={styles.profileSection}>
                <Text style={GlobalStyles.sectionTitle}>Geral</Text>
                <SettingsMenuItem
                    itemName="Notificações"
                    onPress={() => {
                        navigation.navigate("Notifications");
                    }}
                />
                <SettingsMenuItem
                    itemName="Meus dados"
                    onPress={() => {
                        navigation.navigate("Profile");
                    }}
                />
            </View>
            <View style={styles.profileSection}>
                <Text style={GlobalStyles.sectionTitle}>Sobre</Text>
                <SettingsMenuItem itemName="Política de privacidade" onPress={() => {}} />
                <SettingsMenuItem itemName="Termos e Política de uso" onPress={() => {}} />
                <SettingsMenuItem
                    itemName="Ajuda"
                    onPress={() => {
                        navigation.navigate("Help");
                    }}
                />
            </View>
            <View style={styles.logOutOutterContainer}>
                <Pressable onPress={logOutHandler}>
                    <View style={styles.logOutInnerContainer}>
                        <Text style={styles.logOutText}>Log out</Text>
                        <Ionicons name="exit-outline" size={24} color={GlobalStyles.colors.primary400} />
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
