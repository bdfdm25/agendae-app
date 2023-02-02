import { IApiToken } from "@models/api-token.interface";
import { ISignin } from "@models/signin.interface";
import { signin } from "@services/auth.service";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../../../../store/authentication-context";
import { SigninView } from "./SigninView";

export default function SignIn({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  function signupHandler() {
    navigation.navigate("Signup");
  }

  async function signinHandler(signInData: ISignin) {
    setIsLoading(true);
    try {
      const response: IApiToken = await signin(signInData);
      authCtx.authenticate(response.access_token);
      console.log("[ACCESS TOKEN]", response.access_token);
      setIsLoading(false);
    } catch (error) {
      Alert.alert(
        "Falha na autenticação!",
        "Não foi possível fazer acessar no momento. Verifique seus dados ou tente novamente mais tarde."
      );
      setIsLoading(false);
    }
  }

  function passwordRecoveryHandler() {
    console.log("[PWD RECOVERY]");
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
