import LoadingOverlay from "@components/ui/LoadingOverlay";
import { SchedulesContext } from "@store/schedules-context";
import { useContext, useState } from "react";
import { NewScheduleView } from "./NewScheduleView";

export default function NewSchedule({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const schedulesCtx = useContext(SchedulesContext);
  function exitHandler() {
    navigation.goBack();
  }
  function submitHandler(data) {
    setIsLoading(true);
    schedulesCtx.addSchedule({
      ...data,
      id: new Date().toString() + Math.random().toString(),
    });
    navigation.goBack();
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }
  return (
    <NewScheduleView submitHandler={submitHandler} exitHandler={exitHandler} />
  );
}
