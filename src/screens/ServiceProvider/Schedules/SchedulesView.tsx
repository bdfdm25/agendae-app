import { Title } from "@components/ui";

import { AuthContext } from "@screens/Auth/context/authentication-context";
import { GlobalStyles } from "@styles/styles";
import { useContext } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Agenda from "./components/Agenda";
import EmptyScheduleList from "./components/EmptyScheduleList";

export function SchedulesView({ addNewScheduleHandler, scheduleList }) {
  const authCtx = useContext(AuthContext);

  function Root() {
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

    return <Agenda />;
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
        <Root />
      </View>
    </SafeAreaView>
  );
}
