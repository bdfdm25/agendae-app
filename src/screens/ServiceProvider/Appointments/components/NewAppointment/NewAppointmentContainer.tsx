import LoadingOverlay from "@components/ui/LoadingOverlay";
import { AppointmentsContext } from "@store/appointments-context";
import { useContext, useState } from "react";
import { NewAppointmentView } from "./NewAppointmentView";

export default function NewAppointment({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const appointmentsCtx = useContext(AppointmentsContext);
  function exitHandler() {
    navigation.goBack();
  }
  function submitHandler(data) {
    setIsLoading(true);
    appointmentsCtx.addAppointment({
      ...data,
      id: new Date().toString() + Math.random().toString(),
    });
    navigation.goBack();
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }
  return (
    <NewAppointmentView
      submitHandler={submitHandler}
      exitHandler={exitHandler}
    />
  );
}
