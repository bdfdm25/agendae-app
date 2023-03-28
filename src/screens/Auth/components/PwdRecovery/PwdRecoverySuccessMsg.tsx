import { IconButton, Subtitle, Title } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { StyleSheet, View } from "react-native";

function PwdRecoveySuccessMsg({ navigation }) {
  function navigationHandler() {
    console.log("GoBack to Auth");
    navigation.navigate("Signin");
  }

  return (
    <View style={[GlobalStyles.rootContainer]}>
      <IconButton onPress={navigationHandler} icon="chevron-back" size={24} />
      <View style={styles.successContainer}>
        <Ionicons
          name="checkmark-circle-outline"
          size={120}
          color={GlobalStyles.colors.primary400}
        />
        <Title color={GlobalStyles.colors.primary400}>Tudo certo!</Title>
        <Subtitle>
          Dados enviados via e-mail. Confira também sua caixa de spam.
        </Subtitle>
      </View>
    </View>
  );
}

export default PwdRecoveySuccessMsg;

const styles = StyleSheet.create({
  successContainer: {
    marginTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});
