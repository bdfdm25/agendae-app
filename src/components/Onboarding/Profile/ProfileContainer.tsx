import { IProfile } from "@models/profile.interface";
import { AuthContext } from "@store/authentication-context";
import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import ProfileView from "./ProfileView";

export default function Profile({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  const authCtx = useContext(AuthContext);

  function exitHandler() {
    navigation.goBack();
  }

  function submitHandler(data: IProfile) {
    profileCtx.setProfileInfo(data);
    console.log("[PROFILE CTX]", profileCtx.onboardingInfo);
    console.log("[PROFILE DATA]", data);
    navigation.navigate("ScheduleConfig");
  }

  return (
    <ProfileView
      exitHandler={exitHandler}
      submitHandler={submitHandler}
      userInfo={authCtx.userInfo}
    />
  );
}
