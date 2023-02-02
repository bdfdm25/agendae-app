import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function CategoryItemView({ name }) {
    return (
        <Pressable style={styles.categoryItemContainer}>
            <View>
                <Text style={{ textTransform: "capitalize" }}>{name}</Text>
            </View>
        </Pressable>
    );
}
