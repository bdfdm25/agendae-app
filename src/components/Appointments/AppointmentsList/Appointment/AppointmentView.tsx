import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
export default function AppointmentView({ appointment }) {
  return (
    <View style={styles.appointmentItemOutterContainer}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.appointmentItemInnerContainer}>
          <Text style={styles.serviceText}>{appointment.serviceType}</Text>
          <Text style={styles.dateTimeText}>{appointment.serviceTime}</Text>
        </View>
        <Text style={styles.clientText}>{appointment.clientName}</Text>
      </Pressable>
    </View>
  );
}
