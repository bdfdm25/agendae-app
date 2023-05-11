import { PrimaryButton } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GlobalStyles } from "@styles/styles";
import { StyleSheet, Text, View } from "react-native";

export type RootStackParamList = {
  ServiceProviderOnboarding: { screen: string } | undefined;
  Schedules: { screen: string } | undefined;
};

function EmptyScheduleWarning({ label, message, route }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style-={[GlobalStyles.rootContainer]}>
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
          <Text style={styles.subtitle}>{message}</Text>
        </View>
      </View>
      <View style={{ marginTop: 60 }}>
        <PrimaryButton
          onPress={() => {
            navigation.navigate(route);
          }}
        >
          {label}
        </PrimaryButton>
      </View>
    </View>
  );
}

export default EmptyScheduleWarning;

const styles = StyleSheet.create({
  textOutterContainer: {
    alignItems: "center",
    marginTop: "15%",
  },
  textInnerContainer: {
    marginTop: 20,
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 18,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "poppins-light",
    fontSize: 16,
    textAlign: "center",
  },
});
