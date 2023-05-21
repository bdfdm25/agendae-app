import { ISignup } from "@models/signup.interface";
import { IUser } from "@models/user.interface";
import { useAuth } from "@screens/Auth/hooks/auth-hook";
import { RoleEnum } from "@utils/enums/role.enum";
import { useHttp } from "@utils/hooks/http-hook";
import { useState } from "react";
import { Alert } from "react-native";
import { SignupView } from "./SignupView";

export default function Signup({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchData } = useHttp();
  const { signup } = useAuth();
  function signinHandler() {
    navigation.navigate("Signin");
  }

  async function signupHandler(signupData: ISignup) {
    setIsLoading(true);
    const user: IUser = {
      fullname: signupData.fullname,
      email: signupData.email,
      password: signupData.password,
      role: RoleEnum.SERVICE_PROVIDER,
      profileUpdated: false,
    };

    try {
      await signup(user);
      setIsLoading(false);
      navigation.navigate("Signin");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Falha no cadastro!",
        "Não foi possível realizar seu cadastro no momento. Verifique seus dados ou tente novamente mais tarde."
      );
      setIsLoading(false);
    }
  }

  return (
    <SignupView
      signinHandler={signinHandler}
      signupHandler={signupHandler}
      loading={isLoading}
    />
  );
}
