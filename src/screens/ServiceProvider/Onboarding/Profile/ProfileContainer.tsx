import { IProfile } from "@models/profile.interface";

import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import ProfileView from "./ProfileView";
import { AuthContext } from "@screens/Auth/context/authentication-context";

export default function Profile({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  const authCtx = useContext(AuthContext);

  function exitHandler() {
    navigation.goBack();
  }

  function submitHandler(data: IProfile) {
    profileCtx.setProfileInfo(data);
    navigation.navigate("OpeningHours");
  }

  return (
    <ProfileView
      exitHandler={exitHandler}
      submitHandler={submitHandler}
      userInfo={authCtx.userInfo}
    />
  );
}
