import AppointmentsList from "@components/Appointments/AppointmentsList";
import EmptyAppointments from "@components/Appointments/EmptyAppointments";
import NextAppointment from "@components/Appointments/NextAppointment";
import Search from "@components/Search/SearchContainer";
import { Subtitle, Title } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

export function HomeView({ fullname, isProfileUpdated, appointments }) {
  function Appointments() {
    return (
      <>
        <View>
          <Search />
        </View>

        <View style={{ flex: 1 }}>
          <NextAppointment />
          <View style={styles.appointmentContainer}>
            <Text style={GlobalStyles.sectionTitle}>Agendamentos de hoje</Text>
            <AppointmentsList appointments={appointments} />
          </View>
        </View>
      </>
    );
  }

  function Root() {
    if (isProfileUpdated && appointments.length > 0) {
      return <Appointments />;
    }

    if (isProfileUpdated && appointments.length == 0) {
      return (
        <View style={{ marginTop: 60 }}>
          <EmptyAppointments
            label="novo agendamento"
            message="Comece adicionando um novo agendamento em sua lista!"
            route="NewAppointment"
          />
        </View>
      );
    }

    if (!isProfileUpdated) {
      return (
        <EmptyAppointments
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
        <Title color={GlobalStyles.colors.primary400}>Olá {fullname}!</Title>
        {appointments.length > 0 && <Subtitle>5 novos agendamentos</Subtitle>}
      </View>

      <Root />
    </SafeAreaView>
  );
}
