import { IApiToken } from "@models/api-token.interface";
import { ISignin } from "@models/signin.interface";
import { Routes } from "@navigation/routes.helper";
import { AuthContext } from "@store/authentication-context";
import { HttpContext } from "@store/http-context";
import { HttpStatusCode } from "axios";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { SigninView } from "./SigninView";

export default function SignIn({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const httpCtx = useContext(HttpContext);

  function signupHandler() {
    navigation.navigate("Signup");
  }

  async function signinHandler(signInData: ISignin) {
    setIsLoading(true);
    try {
      const response: IApiToken = await httpCtx.post(Routes.SIGNIN, signInData);
      authCtx.authenticate(response.data.accessToken);
    } catch (error) {
      if (error.response.status === HttpStatusCode.Conflict) {
        Alert.alert("Falha na autenticação!", "Este e-mail já esta em uso.");
      } else {
        Alert.alert(
          "Falha na autenticação!",
          "Não foi possível fazer seu login no momento. Verifique seus dados ou tente novamente mais tarde."
        );
      }

      setIsLoading(false);
    }
  }

  function passwordRecoveryHandler() {
    navigation.navigate("Recovery");
  }

  return (
    <SigninView
      signupHandler={signupHandler}
      signinHandler={(signInData: ISignin) => signinHandler(signInData)}
      passwordRecoveryHandler={passwordRecoveryHandler}
      loading={isLoading}
    />
  );
}
