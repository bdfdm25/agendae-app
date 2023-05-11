import { Card } from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function NextScheduleView() {
  return (
    <View>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Card color={GlobalStyles.colors.primary400}>
          <View style={styles.scheduleOutterContainer}>
            <View>
              <Text style={[styles.scheduleInfo, styles.scheduleHeader]}>
                Corte e Barba
              </Text>
              <Text style={[styles.scheduleInfo, styles.scheduleClient]}>
                Joe
              </Text>
            </View>

            <View>
              <View style={styles.scheduleDateTimeContainer}>
                <Ionicons
                  name="calendar"
                  color={GlobalStyles.colors.accent500}
                  size={16}
                />
                <Text style={[styles.scheduleInfo, styles.scheduleDateTime]}>
                  21/10/2022
                </Text>
              </View>
              <View
                style={[
                  styles.scheduleDateTimeContainer,
                  styles.scheduleTimeContainer,
                ]}
              >
                <Ionicons
                  name="time-outline"
                  color={GlobalStyles.colors.accent500}
                  size={16}
                />
                <Text style={[styles.scheduleInfo, styles.scheduleDateTime]}>
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
