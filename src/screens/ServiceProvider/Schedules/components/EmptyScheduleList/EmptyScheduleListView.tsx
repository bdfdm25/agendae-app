import { PrimaryButton } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyScheduleListView({ label, message, route, navigation }) {
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
      <View style={styles.buttonOuterContainer}>
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
