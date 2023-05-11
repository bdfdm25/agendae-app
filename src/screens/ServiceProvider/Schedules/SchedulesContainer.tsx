import LoadingOverlay from "@components/ui/LoadingOverlay";
import { useLayoutEffect, useState } from "react";
import { SchedulesView } from "./SchedulesView";

export default function Schedules({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, []);

  function addNewScheduleHandler() {
    navigation.navigate("NewSchedule");
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }
  return <SchedulesView addNewScheduleHandler={addNewScheduleHandler} />;
}
