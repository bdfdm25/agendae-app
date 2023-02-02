import CategoriesListContainer from "@components/Categories";
import { Title } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../../components/Search";
import { styles } from "./styles";

export function HomeView() {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <View style={{ marginTop: 30 }}>
                <Title color={GlobalStyles.colors.primary500}>agendaê</Title>
            </View>

            <View>
                <Search />
            </View>

            <View style={{ marginVertical: 20 }}>
                <CategoriesListContainer />
            </View>

            <View style={{ marginVertical: 20 }}>
                <Text>Top Rating Providers</Text>
            </View>
        </SafeAreaView>
    );
}
