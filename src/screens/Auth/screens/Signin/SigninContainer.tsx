import { useAuth } from "@screens/Auth/hooks/auth-hook";

import { HttpStatusCode } from "axios";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { SigninView } from "./SigninView";
import { ISignin } from "@screens/Auth/models/signin.interface";
import { AuthContext } from "@screens/Auth/context/authentication-context";

export default function SignIn({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const { signin } = useAuth();

  async function signinHandler(signInData: ISignin) {
    try {
      setIsLoading(true);
      const response: string = await signin(signInData);
      authCtx.authenticate(response);
    } catch (error) {
      console.error("[AUTH]", error);
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

  function signupHandler() {
    navigation.navigate("Signup");
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
