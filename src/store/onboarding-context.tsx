import { INewService } from "@models/new-service.interface";
import { IOnboarding } from "@models/onboarding.interface";
import { IProfile } from "@models/profile.interface";
import { IScheduleConfig } from "@models/schedule-config.interface";
import { createContext, useReducer, useState } from "react";

const profile: IProfile = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  naturalPersonDocument: "",
  legalPersonDocument: "",
};

const scheduleConfig: IScheduleConfig = {
  workDayStart: "",
  workDayEnd: "",
  workHourStart: "",
  workHourEnd: "",
};

const newService: INewService = {
  serviceName: "",
  serviceDuration: "",
  servicePrice: "",
};

const onboardingData: IOnboarding = {
  profile: profile,
  scheduleConfig: scheduleConfig,
  newService: newService,
};

export const OnboardingContext = createContext({
  onboardingInfo: onboardingData,
  setProfileInfo: (data: IProfile) => {},
  setScheduleInfo: (data: IScheduleConfig) => {},
  setNewServiceInfo: (data: INewService) => {},
});

function OnboardingContextProvider({ children }) {
  const [onboardingInfo, setOnboardingInfo] = useState(onboardingData);

  function setProfileInfo(data: IProfile) {
    onboardingInfo.profile = data;
  }

  function setScheduleInfo(data: IScheduleConfig) {
    onboardingInfo.scheduleConfig = data;
  }

  function setNewServiceInfo(data: INewService) {
    onboardingInfo.newService = data;
  }

  const value = {
    onboardingInfo: onboardingInfo,
    setProfileInfo: setProfileInfo,
    setScheduleInfo: setScheduleInfo,
    setNewServiceInfo: setNewServiceInfo,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export default OnboardingContextProvider;
