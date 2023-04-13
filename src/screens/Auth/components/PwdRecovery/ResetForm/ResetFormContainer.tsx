import { IResetPassword } from "@models/reset-password.interface";
import { Routes } from "@navigation/routes.helper";
import { HttpContext } from "@store/http-context";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import ResetFormView from "./ResetFormView";

export default function ResetForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const httpCtx = useContext(HttpContext);

  function navigationHandler() {
    navigation.goBack();
  }

  async function resetHandler(newPwdData: IResetPassword) {
    setIsLoading(true);

    try {
      await httpCtx.post(Routes.RESET_PASSWORD, newPwdData);
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
