import { createContext, useReducer } from "react";

import { INewService } from "@models/new-service.interface";
import { IOnboarding } from "@models/onboarding.interface";
import { IOpeningHours } from "@models/opening-hours.interface";
import { IProfile } from "@models/profile.interface";

enum OnboardingActionKind {
  PROFILE = "PROFILE",
  OPENING_HOURS = "OPENING_HOURS",
  NEW_SERVICE = "NEW_SERVICE",
}
interface IOboardingAction {
  type: OnboardingActionKind;
  payload: any;
}

const profile: IProfile = {
  fullname: "",
  email: "",
  phone: "",
  address: "",
  naturalPersonDocument: "",
  legalPersonDocument: "",
};

const openingHours: IOpeningHours = {
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

const onboardingData: any = {
  fullname: "",
  email: "",
  phone: "",
  address: "",
  naturalPersonDocument: "",
  legalPersonDocument: "",
  openingHours: openingHours,
  services: [newService],
};

export const OnboardingContext = createContext({
  onboardingInfo: onboardingData,
  setProfileInfo: (data: IProfile) => {},
  setOpeningHours: (data: IOpeningHours) => {},
  setNewServiceInfo: (data: INewService) => {},
});

function onboardingReducer(state: any, action: IOboardingAction) {
  switch (action.type) {
    case "PROFILE":
      return {
        ...action.payload,
        openingHours: state.openingHours,
        services: [],
      };
    case "OPENING_HOURS":
      return { ...state, openingHours: action.payload, services: [] };
    case "NEW_SERVICE":
      return {
        ...state,
        openingHours: state.openingHours,
        services: [action.payload],
      };
    default:
      return state;
  }
}

function OnboardingContextProvider({ children }) {
  const [onboardingInfo, dispatch] = useReducer(
    onboardingReducer,
    onboardingData
  );

  function setProfileInfo(data: IProfile) {
    dispatch({ type: OnboardingActionKind.PROFILE, payload: data });
  }

  function setOpeningHours(data: IOpeningHours) {
    dispatch({ type: OnboardingActionKind.OPENING_HOURS, payload: data });
  }

  function setNewServiceInfo(data: INewService) {
    dispatch({ type: OnboardingActionKind.NEW_SERVICE, payload: data });
  }

  const value = {
    onboardingInfo: onboardingInfo,
    setProfileInfo: setProfileInfo,
    setOpeningHours: setOpeningHours,
    setNewServiceInfo: setNewServiceInfo,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export default OnboardingContextProvider;
