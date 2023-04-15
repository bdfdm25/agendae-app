import { Routes } from "@navigation/routes.helper";
import { HttpContext } from "@store/http-context";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import EmailFormView from "./EmailFormView";

export default function EmailForm({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const httpCtx = useContext(HttpContext);

  function navigationHandler() {
    navigation.goBack();
  }

  async function submitHandler(recoveryEmail: string) {
    setIsLoading(true);
    try {
      await httpCtx.post(Routes.VALIDATION_CODE, recoveryEmail);
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
