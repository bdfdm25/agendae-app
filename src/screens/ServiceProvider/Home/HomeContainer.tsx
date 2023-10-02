import LoadingOverlay from "@components/ui/LoadingOverlay";

import { AuthContext } from "@screens/Auth/context/authentication-context";
import { SchedulesContext } from "@store/schedules-context";
import { localeToIsoDate } from "@utils/locale/LocaleConfig";
import { useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useSchedule } from "../hooks/schedule-hook";
import { HomeView } from "./HomeView";

export default function HomeContainer({ navigation }) {
  const today = localeToIsoDate(new Date().toLocaleDateString("pt-br"));
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
        console.error("[HOME]", error);
        Alert.alert("Ops...tivemos um problema", "Tente novamente mais tarde.");
      }
    }

    authCtx.isProfileUpdated ? getSchedules() : scheduleCtx.setSchedules([]);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <HomeView
      fullname={authCtx.userInfo.fullname}
      isProfileUpdated={authCtx.isProfileUpdated}
      schedules={scheduleCtx.schedules}
      navigation={navigation}
    />
  );
}
