import AppointmentsList from "@components/Appointments/AppointmentsList";
import NextAppointment from "@components/Appointments/NextAppointment";
import { Subtitle, Title } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { useContext } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { AppointmentsContext } from "../../../store/appointments-context";
import Search from "@components/Search/SearchContainer";
import { styles } from "./styles";
import EmptyAppointments from "@components/Appointments/EmptyAppointments";
import { AuthContext } from "@store/authentication-context";

export function HomeView() {
  const appointmentsCtx = useContext(AppointmentsContext);
  const authCtx = useContext(AuthContext);

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
            <AppointmentsList appointments={appointmentsCtx.appointments} />
          </View>
        </View>
      </>
    );
  }

  function Root() {
    if (authCtx.isProfileUpdate && appointmentsCtx.appointments.length > 0) {
      return <Appointments />;
    }

    if (authCtx.isProfileUpdate && appointmentsCtx.appointments.length == 0) {
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

    if (!authCtx.isProfileUpdate) {
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
        <Title color={GlobalStyles.colors.primary400}>Olá John Doe!</Title>
        {appointmentsCtx.appointments.length > 0 && (
          <Subtitle>5 novos agendamentos</Subtitle>
        )}
      </View>

      <Root />
    </SafeAreaView>
  );
}
