import { GlobalStyles } from "@styles/styles";
import { Pressable, StyleSheet, Text, View } from "react-native";
function SecondaryButton({ onPress, children }) {
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

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: "80%",
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 28,
  },
  buttonInnerContainer: {
    backgroundColor: "white",
    paddingVertical: 18,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontFamily: "poppins-bold",
    color: GlobalStyles.colors.primary500,
    textAlign: "center",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
