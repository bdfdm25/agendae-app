import { IScheduleConfig } from "@models/schedule-config.interface";
import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import ScheduleConfigView from "./ScheduleConfigView";

export default function ScheduleConfig({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  function navigationHandler(route: string) {
    navigation.navigate(route);
  }

  function submitHandler(data: IScheduleConfig) {
    profileCtx.setScheduleInfo(data);
    console.log("[SCHEDULE CTX]", profileCtx.onboardingInfo);
    console.log("[SCHEDULE DATA]", data);
    navigation.navigate("NewService");
  }

  return (
    <ScheduleConfigView
      navigationHandler={(route: string) => navigationHandler(route)}
      submitHandler={submitHandler}
    />
  );
}
