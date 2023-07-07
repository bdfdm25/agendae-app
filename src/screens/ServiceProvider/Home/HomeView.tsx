import Search from "@components/Search/SearchContainer";
import { Title } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import EmptyScheduleList from "../Schedules/components/EmptyScheduleList";
import NextSchedule from "../Schedules/components/NextSchedule";
import { styles } from "./styles";

export function HomeView({
  fullname,
  isProfileUpdated,
  schedules,
  navigation,
}) {
  function Schedules() {
    return (
      <>
        <View style={{ marginTop: 20 }}>
          <Search />
        </View>

        <View style={{ flex: 1 }}>
          <NextSchedule />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
                navigation.navigate("Services");
              }}
            >
              <View style={styles.homeCard}>
                <Ionicons
                  name="briefcase-outline"
                  size={18}
                  color={GlobalStyles.colors.accent500}
                />
                <Text style={styles.homeCardText}>serviços</Text>
              </View>
            </Pressable>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <View style={styles.homeCard}>
                <Ionicons
                  name="wallet-outline"
                  size={18}
                  color={GlobalStyles.colors.accent500}
                />
                <Text style={styles.homeCardText}>pagamentos</Text>
              </View>
            </Pressable>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <View style={styles.homeCard}>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={18}
                  color={GlobalStyles.colors.accent500}
                />
                <Text style={styles.homeCardText}>conversas</Text>
              </View>
            </Pressable>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <View style={styles.homeCard}>
                <Ionicons
                  name="person-circle-outline"
                  size={18}
                  color={GlobalStyles.colors.accent500}
                />
                <Text style={styles.homeCardText}>meu perfil</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </>
    );
  }

  function Root() {
    // if (isProfileUpdated && schedules.length > 0) {
    //   return <Schedules />;
    // }

    // if (isProfileUpdated && schedules.length == 0) {
    //   return (
    //     <View style={{ marginTop: 60 }}>
    //       <EmptyScheduleList
    //         label="novo agendamento"
    //         message="Comece adicionando um novo agendamento em sua lista!"
    //         route="NewSchedule"
    //       />
    //     </View>
    //   );
    // }

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

    return <Schedules />;
  }

  return (
    <SafeAreaView style={[GlobalStyles.rootContainer]}>
      <View>
        <Title color={GlobalStyles.colors.primary400}>olá {fullname}!</Title>
        {/* VALIDAR A CONDICAO PARA EXIBIR O AVISO E QNTD DE NOVOS AGENDAMENTOS */}
        {/* {schedules.length > 0 && <Subtitle>5 novos agendamentos</Subtitle>} */}
      </View>

      <Root />
    </SafeAreaView>
  );
}
