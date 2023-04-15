import { INewService } from "@models/new-service.interface";
import { Routes } from "@navigation/routes.helper";
import { AuthContext } from "@store/authentication-context";
import { HttpContext } from "@store/http-context";
import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import { Alert } from "react-native";
import NewServiceView from "./NewServiceView";

export default function NewService({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  const authCtx = useContext(AuthContext);
  const httpCtx = useContext(HttpContext);

  function navigationHandler(route: string) {
    navigation.navigate(route);
  }

  async function submitHandler(data: INewService) {
    const config = {
      headers: { Authorization: `Bearer ${authCtx.token}` },
    };

    profileCtx.setNewServiceInfo(data);

    try {
      await httpCtx.post(
        Routes.SAVE_SERVICE_PROVIDER,
        profileCtx.onboardingInfo,
        config
      );
      authCtx.updateProfile();
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Ops...tivemos um problema", "Tente novamente mais tarde.");
      console.error(error);
    }
  }

  return (
    <NewServiceView
      navigationHandler={(route: string) => navigationHandler(route)}
      submitHandler={submitHandler}
    />
  );
}
