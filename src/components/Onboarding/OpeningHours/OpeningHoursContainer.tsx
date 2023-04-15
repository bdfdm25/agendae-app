import { OnboardingContext } from "@store/onboarding-context";
import { useContext } from "react";
import OpeningHoursView from "./OpeningHoursView";
import { IOpeningHours } from "@models/opening-hours.interface";

export default function OpeningHours({ navigation }) {
  const profileCtx = useContext(OnboardingContext);
  function navigationHandler(route: string) {
    navigation.navigate(route);
  }

  function submitHandler(data: IOpeningHours) {
    profileCtx.setOpeningHours(data);
    navigation.navigate("NewService");
  }

  return (
    <OpeningHoursView
      navigationHandler={(route: string) => navigationHandler(route)}
      submitHandler={submitHandler}
    />
  );
}
