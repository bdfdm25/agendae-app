import LoadingOverlay from "@components/ui/LoadingOverlay";
import { useContext, useLayoutEffect, useState } from "react";
import { SchedulesView } from "./SchedulesView";
import { SchedulesContext } from "@store/schedules-context";

export default function Schedules({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [scheduleList, setScheduleList] = useState([]);
  const scheduleCtx = useContext(SchedulesContext);

  useLayoutEffect(() => {
    setScheduleList(scheduleCtx.schedules);
    setIsLoading(false);
  }, []);

  function addNewScheduleHandler() {
    navigation.navigate("NewSchedule");
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }
  return (
    <SchedulesView
      addNewScheduleHandler={addNewScheduleHandler}
      scheduleList={scheduleList}
    />
  );
}
