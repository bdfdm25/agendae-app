import { IServiceProvider } from "@models/service-provider.interface";
import { IService } from "@models/service.interface";
import { AuthContext } from "@screens/Auth/context/authentication-context";
import { useOnboarding } from "@screens/ServiceProvider/hooks/onboarding-hook";
import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import { Alert } from "react-native";
import NewServiceView from "./NewServiceView";

export default function NewService({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  const authCtx = useContext(AuthContext);
  const { setServiceProvider } = useOnboarding();

  async function submitHandler(data: IService) {
    profileCtx.setNewServiceInfo(data);

    const serviceProvider: IServiceProvider = profileCtx.onboardingInfo;
    serviceProvider.services.push(data);

    try {
      await setServiceProvider(serviceProvider);
      authCtx.updateProfile();
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("Ops...tivemos um problema", "Tente novamente mais tarde.");
    }
  }

  function navigationHandler(route: string) {
    navigation.navigate(route);
  }

  return (
    <NewServiceView
      navigationHandler={(route: string) => navigationHandler(route)}
      submitHandler={submitHandler}
    />
  );
}
