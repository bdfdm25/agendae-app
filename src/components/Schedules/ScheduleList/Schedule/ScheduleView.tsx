import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
export default function ScheduleView({ schedule }) {
  return (
    <View style={styles.scheduleItemOutterContainer}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.scheduleItemInnerContainer}>
          <Text style={styles.serviceText}>{schedule.serviceType}</Text>
          <Text style={styles.dateTimeText}>{schedule.serviceTime}</Text>
        </View>
        <Text style={styles.clientText}>{schedule.clientName}</Text>
      </Pressable>
    </View>
  );
}
