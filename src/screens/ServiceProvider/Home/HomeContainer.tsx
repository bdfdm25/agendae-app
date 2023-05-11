import { SchedulesContext } from "@store/schedules-context";
import { AuthContext } from "@store/authentication-context";
import { useContext } from "react";
import { HomeView } from "./HomeView";

export default function HomeContainer() {
  const authCtx = useContext(AuthContext);
  const schedulesCtx = useContext(SchedulesContext);

  return (
    <HomeView
      fullname={authCtx.userInfo.fullname}
      isProfileUpdated={authCtx.isProfileUpdated}
      schedules={schedulesCtx.schedules}
    />
  );
}
