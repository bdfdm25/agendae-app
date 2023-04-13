import { ISignup } from "@models/signup.interface";
import { IUser } from "@models/user.interface";
import { Routes } from "@navigation/routes.helper";
import { HttpContext } from "@store/http-context";
import { RoleEnum } from "@utils/enums/role.enum";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { SignupView } from "./SignupView";

export default function Signup({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const httpCtx = useContext(HttpContext);

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
      // await signup(user);
      await httpCtx.post(Routes.SIGNUP, user);
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
