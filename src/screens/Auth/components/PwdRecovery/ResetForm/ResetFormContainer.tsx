import { IResetPassword } from "@models/reset-password.interface";
import { resetPassword } from "@services/auth.service";
import { useState } from "react";
import { Alert } from "react-native";
import ResetFormView from "./ResetFormView";

export default function ResetForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  function navigationHandler() {
    navigation.goBack();
  }

  async function resetHandler(newPwdData: IResetPassword) {
    setIsLoading(true);

    try {
      await resetPassword(newPwdData);
      setIsLoading(false);
      navigation.navigate("Signin");
    } catch (error) {
      console.log(error.response);
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
