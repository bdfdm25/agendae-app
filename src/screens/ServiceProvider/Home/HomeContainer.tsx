import { AppointmentsContext } from "@store/appointments-context";
import { AuthContext } from "@store/authentication-context";
import { useContext } from "react";
import { HomeView } from "./HomeView";

export default function HomeContainer() {
  const authCtx = useContext(AuthContext);
  const appointmentsCtx = useContext(AppointmentsContext);

  return (
    <HomeView
      fullname={authCtx.userInfo.fullname}
      isProfileUpdated={authCtx.isProfileUpdated}
      appointments={appointmentsCtx.appointments}
    />
  );
}
