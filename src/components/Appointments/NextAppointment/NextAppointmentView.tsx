import { Card } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function NextAppointmentView() {
  return (
    <View>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Card color={GlobalStyles.colors.primary400}>
          <View style={styles.appointmentOutterContainer}>
            <View>
              <Text style={[styles.appointmentInfo, styles.appointmentHeader]}>
                Corte e Barba
              </Text>
              <Text style={[styles.appointmentInfo, styles.appointmentClient]}>
                Joe
              </Text>
            </View>

            <View>
              <View style={styles.appointmentDateTimeContainer}>
                <Ionicons
                  name="calendar"
                  color={GlobalStyles.colors.accent500}
                  size={16}
                />
                <Text
                  style={[styles.appointmentInfo, styles.appointmentDateTime]}
                >
                  21/10/2022
                </Text>
              </View>
              <View
                style={[
                  styles.appointmentDateTimeContainer,
                  styles.appointmentTimeContainer,
                ]}
              >
                <Ionicons
                  name="time-outline"
                  color={GlobalStyles.colors.accent500}
                  size={16}
                />
                <Text
                  style={[styles.appointmentInfo, styles.appointmentDateTime]}
                >
                  10:00
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </Pressable>
    </View>
  );
}
