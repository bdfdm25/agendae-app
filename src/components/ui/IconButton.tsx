import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { Pressable, View } from "react-native";

function IconButton({ onPress, icon, size }) {
    return (
        <View>
            <Pressable onPress={onPress}>
                <View>
                    <Ionicons name={icon} size={size} color={GlobalStyles.colors.primary400} />
                </View>
            </Pressable>
        </View>
    );
}

export default IconButton;
