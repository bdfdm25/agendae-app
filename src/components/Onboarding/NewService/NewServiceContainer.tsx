import { INewService } from "@models/new-service.interface";
import { AuthContext } from "@store/authentication-context";
import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import NewServiceView from "./NewServiceView";

export default function NewService({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  const authCtx = useContext(AuthContext);
  function navigationHandler(route: string) {
    navigation.navigate(route);
  }

  function submitHandler(data: INewService) {
    profileCtx.setNewServiceInfo(data);
    authCtx.updateProfile();
    console.log("[NEW SERVICE CTX]", profileCtx.onboardingInfo);
    console.log("[NEW SERVICE DATA]", data);
    // console.log("[ONBOARDING DATA FROM CONTEXT");
    // send user to home
    // show on home message about empty appointments
  }

  return (
    <NewServiceView
      navigationHandler={(route: string) => navigationHandler(route)}
      submitHandler={submitHandler}
    />
  );
}
