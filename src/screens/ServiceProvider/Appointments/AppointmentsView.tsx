import AppointmentsList from "@components/Appointments/AppointmentsList";
import EmptyAppointments from "@components/Appointments/EmptyAppointments";
import Calendar from "@components/Calendar";
import { PrimaryButton, Title } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { AppointmentsContext } from "@store/appointments-context";
import { AuthContext } from "@store/authentication-context";
import { GlobalStyles } from "@styles/styles";
import { useContext } from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import Agenda from "./components/Agenda";
import TimelineCalendarScreen from "./components/Agenda/TimeLine";

export function AppointmentsView({ addNewAppointmentHandler }) {
  const appointmentsCtx = useContext(AppointmentsContext);
  const authCtx = useContext(AuthContext);

  function Appointments() {
    return (
      <>
        <Agenda />
        {/* <TimelineCalendarScreen /> */}
        {/* <SimpleAgenda /> */}
        {/* <Calendar />
        <View style={styles.appointmentContainer}>
          <AppointmentsList appointments={appointmentsCtx.appointments} />
        </View>
        <View style={styles.newAppointmentButton}>
          <PrimaryButton onPress={addNewAppointmentHandler}>
            novo agendamento
          </PrimaryButton>
        </View> */}
      </>
    );
  }

  function Root() {
    if (authCtx.isProfileUpdated && appointmentsCtx.appointments.length > 0) {
      return <Appointments />;
    }

    if (authCtx.isProfileUpdated && appointmentsCtx.appointments.length == 0) {
      return (
        <View style={{ marginTop: 60 }}>
          <View style={styles.textOutterContainer}>
            <Ionicons
              name="alert-circle-outline"
              size={80}
              color={GlobalStyles.colors.primary400}
            />
            <View style={styles.textInnerContainer}>
              <Text style={styles.title}>Ops! Sem agendamentos por aqui!</Text>
            </View>
            <View style={styles.textInnerContainer}>
              <Text style={styles.subtitle}>
                Adiocione um novo agendamento agora mesmo.
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 60 }}>
            <PrimaryButton onPress={addNewAppointmentHandler}>
              novo agendamento
            </PrimaryButton>
          </View>
        </View>
      );
    }

    if (!authCtx.isProfileUpdated) {
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
