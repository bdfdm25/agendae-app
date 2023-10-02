import LoadingOverlay from "@components/ui/LoadingOverlay";
import { SchedulesContext } from "@store/schedules-context";
import { useCallback, useContext, useEffect, useState } from "react";
import { AgendaView } from "./AgendaView";
import { useSchedule } from "@screens/ServiceProvider/hooks/schedule-hook";
import { AuthContext } from "@screens/Auth/context/authentication-context";
import { Alert } from "react-native";

export default function Agenda() {
  const [isLoading, setIsLoading] = useState(true);
  const [scheduleList, setScheduleList] = useState([]);
  const scheduleCtx = useContext(SchedulesContext);
  const authCtx = useContext(AuthContext);
  const { getScheduleList } = useSchedule();
  const serviceProvider = authCtx.userInfo.serviceProviderId;

  useEffect(() => {
    setScheduleList(scheduleCtx.schedules);
    setIsLoading(false);
  }, []);

  const onDateChanged = useCallback(async (date, updateSource) => {
    console.log("ExpandableCalendarScreen onDateChanged: ", date, updateSource);
    try {
      setIsLoading(true);
      const schedules = await getScheduleList({
        date: date,
        serviceProvider: serviceProvider,
      });
      scheduleCtx.setSchedules(schedules);
    } catch (error) {
      console.error("[AGENDA]", error);
      Alert.alert("Ops...tivemos um problema", "Tente novamente mais tarde.");
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <AgendaView onDateChanged={onDateChanged} scheduleList={scheduleList} />
  );
}
