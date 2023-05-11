import { PrimaryButton, Title } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { SchedulesContext } from "@store/schedules-context";
import { AuthContext } from "@store/authentication-context";
import { GlobalStyles } from "@styles/styles";
import { useContext } from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import Agenda from "./components/Agenda";
import { styles } from "./styles";
import EmptyScheduleWarning from "@components/Schedules/EmptyScheduleWarning";

export function SchedulesView({ addNewScheduleHandler }) {
  const schedulesCtx = useContext(SchedulesContext);
  const authCtx = useContext(AuthContext);

  function Schedules() {
    return (
      <>
        <Agenda />
      </>
    );
  }

  function Root() {
    if (authCtx.isProfileUpdated && schedulesCtx.schedules.length > 0) {
      return <Schedules />;
    }

    if (authCtx.isProfileUpdated && schedulesCtx.schedules.length == 0) {
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
            <PrimaryButton onPress={addNewScheduleHandler}>
              novo agendamento
            </PrimaryButton>
          </View>
        </View>
      );
    }

    if (!authCtx.isProfileUpdated) {
      return (
        <EmptyScheduleWarning
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
