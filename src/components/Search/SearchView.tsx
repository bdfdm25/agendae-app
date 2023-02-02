import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";

export function SearchView() {
  return (
    <View style={styles.searchOutterContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInputField}
          autoCorrect={false}
          placeholder="Pesquisar..."
          keyboardType="default"
          placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
        />
        <Pressable>
          <Ionicons
            style={{ padding: 5 }}
            name="search-outline"
            size={16}
            color={GlobalStyles.colors.primary400}
          />
        </Pressable>
      </View>
      {/* TODO: desenvolver componente de filtro de pesquisa */}
      {/* <Pressable style={styles.filterContainer}>
                <View>
                    <Ionicons name="filter" size={24} color={GlobalStyles.colors.primary500} />
                </View>
            </Pressable> */}
    </View>
  );
}
