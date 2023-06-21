import { Title } from "@components/ui";

import { AuthContext } from "@screens/Auth/context/authentication-context";
import { GlobalStyles } from "@styles/styles";
import { useContext } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Agenda from "./components/Agenda";
import EmptyScheduleList from "./components/EmptyScheduleList";

export function SchedulesView({ addNewScheduleHandler, scheduleList }) {
  const authCtx = useContext(AuthContext);

  function Schedules() {
    return <Agenda />;
  }

  function Root() {
    if (authCtx.isProfileUpdated && scheduleList.length > 0) {
      return <Schedules />;
    }

    if (authCtx.isProfileUpdated && scheduleList.length == 0) {
      return (
        <View style={{ marginTop: 60, marginHorizontal: 18 }}>
          <EmptyScheduleList
            label="novo agendamento"
            message="Comece adicionando um novo agendamento em sua lista!"
            route="NewSchedule"
          />
        </View>
      );
    }

    if (!authCtx.isProfileUpdated) {
      return (
        <EmptyScheduleList
          label="meu perfil"
          message="Atualize seu perfil para começar a visualizar seus agendamentos e
            gerenciar seus pagamentos."
          route="ServiceProviderOnboarding"
        />
      );
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          paddingHorizontal: 18,
          paddingVertical: 15,
        }}
      >
        <Title color={GlobalStyles.colors.primary400}>agendamentos</Title>
      </View>
      <View style={{ flex: 1 }}>
        {/* <Root /> */}
        <Schedules />
      </View>
    </SafeAreaView>
  );
}
