import { getValidationCode } from "@services/auth.service";
import { useState } from "react";
import { Alert } from "react-native";
import EmailFormView from "./EmailFormView";

export default function EmailForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  function navigationHandler() {
    navigation.goBack();
  }

  async function submitHandler(recoveryEmail: string) {
    setIsLoading(true);
    try {
      await getValidationCode(recoveryEmail);
      setIsLoading(false);
      navigation.navigate("Reset");
    } catch (error) {
      Alert.alert(
        "Erro",
        "Ops! Algo de errado não esta certo. Você poderia tentar novamente?"
      );
      setIsLoading(false);
    }
  }

  return (
    <EmailFormView
      navigationHandler={navigationHandler}
      submitHandler={submitHandler}
      loading={isLoading}
    />
  );
}
