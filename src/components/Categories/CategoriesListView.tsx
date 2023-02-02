import { FlatList, View } from "react-native";
import { CATEGORIES } from "../../mock/mock-data";
import CategoryItemContainer from "./Category";
import { styles } from "./styles";

export function CategoriesListView() {
    function renderCategoryItem(itemData) {
        return <CategoryItemContainer name={itemData.item.name} />;
    }

    return (
        <View style={styles.categoriesListOutterContainer}>
            <FlatList horizontal={true} data={CATEGORIES} keyExtractor={(item) => item.name} renderItem={renderCategoryItem} />
        </View>
    );
}
