import { IResetPassword } from "@models/reset-password.interface";
import { useAuth } from "@screens/Auth/hooks/auth-hook";
import { useState } from "react";
import { Alert } from "react-native";
import ResetFormView from "./ResetFormView";

export default function ResetForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const { resetPassword } = useAuth();

  function navigationHandler() {
    navigation.goBack();
  }

  async function resetHandler(newPwdData: IResetPassword) {
    try {
      setIsLoading(true);
      await resetPassword(newPwdData);
      setIsLoading(false);
      navigation.navigate("Signin");
    } catch (error) {
      Alert.alert(
        "Falha no cadastro!",
        "Não foi possível realizar seu cadastro no momento. Verifique seus dados ou tente novamente mais tarde."
      );
      setIsLoading(false);
    }
  }

  return (
    <ResetFormView
      navigationHandler={navigationHandler}
      resetHandler={resetHandler}
      loading={isLoading}
    />
  );
}
