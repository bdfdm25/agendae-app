import LoadingOverlay from "@components/ui/LoadingOverlay";
import { Routes } from "@navigation/routes.helper";

import { SchedulesContext } from "@store/schedules-context";
import { HTTPMethod } from "@utils/enums/http-method.enum";
import { useHttp } from "@utils/hooks/http-hook";
import { localeToIsoDate } from "@utils/locale/LocaleConfig";
import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { HomeView } from "./HomeView";
import { AuthContext } from "@screens/Auth/context/authentication-context";
import { useSchedule } from "../hooks/schedule-hook";

export default function HomeContainer() {
  const today = localeToIsoDate(new Date().toLocaleDateString());
  const [isLoading, setIsLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  const scheduleCtx = useContext(SchedulesContext);
  const { getScheduleList } = useSchedule();

  const body = {
    date: today,
    serviceProvider: authCtx.userInfo.serviceProviderId,
  };

  useEffect(() => {
    async function getSchedules() {
      try {
        setIsLoading(true);
        const schedules = await getScheduleList(body);
        scheduleCtx.setSchedules(schedules);
      } catch (error) {
        console.error(error);
        Alert.alert("Ops...tivemos um problema", "Tente novamente mais tarde.");
      }
      setIsLoading(false);
    }

    getSchedules();
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <HomeView
      fullname={authCtx.userInfo.fullname}
      isProfileUpdated={authCtx.isProfileUpdated}
      schedules={scheduleCtx.schedules}
    />
  );
}
