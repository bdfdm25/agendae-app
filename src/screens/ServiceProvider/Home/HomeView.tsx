import Search from "@components/Search/SearchContainer";
import { Subtitle, Title } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { SafeAreaView, View } from "react-native";
import NextSchedule from "../Schedules/components/NextSchedule";
import EmptyScheduleList from "../Schedules/components/EmptyScheduleList";

export function HomeView({ fullname, isProfileUpdated, schedules }) {
  function Schedules() {
    return (
      <>
        <View>
          <Search />
        </View>

        <View style={{ flex: 1 }}>
          <NextSchedule />
          {/* <View style={styles.scheduleContainer}>
            <Text style={GlobalStyles.sectionTitle}>Agendamentos de hoje</Text>
            <ScheduleList schedules={schedules} />
          </View> */}
        </View>
      </>
    );
  }

  function Root() {
    if (isProfileUpdated && schedules.length > 0) {
      return <Schedules />;
    }

    if (isProfileUpdated && schedules.length == 0) {
      return (
        <View style={{ marginTop: 60 }}>
          <EmptyScheduleList
            label="novo agendamento"
            message="Comece adicionando um novo agendamento em sua lista!"
            route="NewSchedule"
          />
        </View>
      );
    }

    if (!isProfileUpdated) {
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
    <SafeAreaView style={[GlobalStyles.rootContainer]}>
      <View>
        <Title color={GlobalStyles.colors.primary400}>olá {fullname}!</Title>
        {/* VALIDAR A CONDICAO PARA EXIBIR O AVISO E QNTD DE NOVOS AGENDAMENTOS */}
        {schedules.length > 0 && <Subtitle>5 novos agendamentos</Subtitle>}
      </View>

      <Root />
    </SafeAreaView>
  );
}
