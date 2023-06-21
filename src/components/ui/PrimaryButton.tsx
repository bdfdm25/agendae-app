import { GlobalStyles } from "@styles/styles";
import { Pressable, StyleSheet, Text, View } from "react-native";
function PrimaryButton({ onPress, children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#CCC" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    width: "80%",
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 18,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontFamily: "poppins-bold",
    color: GlobalStyles.colors.accent500,
    textAlign: "center",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
