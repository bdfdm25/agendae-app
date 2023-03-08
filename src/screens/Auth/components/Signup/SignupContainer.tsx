import { ISignup } from "@models/signup.interface";
import { IUser } from "@models/user.interface";
import { signup } from "@services/auth.service";
import { RoleEnum } from "@utils/enums/role.enum";
import { useState } from "react";
import { Alert } from "react-native";
import { SignupView } from "./SignupView";

export default function Signup({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

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

    // PROFILE SELECTION LOGIC FLOW
    // if (signupData.serviceProvider) {
    //   user.role = RoleEnum.SERVICE_PROVIDER;
    // }

    // if (signupData.client) {
    //   user.role = RoleEnum.CLIENT;
    // }

    try {
      await signup(user);
      setIsLoading(false);
    } catch (error) {
      Alert.alert(
        "Falha no cadastro!",
        "Não foi possível realizar seu cadastro no momento. Verifique seus dados ou tente novamente mais tarde."
      );
      setIsLoading(false);
    }

    navigation.navigate("Signin");
  }

  return (
    <SignupView
      signinHandler={signinHandler}
      signupHandler={signupHandler}
      loading={isLoading}
    />
  );
}
