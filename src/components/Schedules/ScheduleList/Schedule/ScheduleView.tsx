import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
export default function ScheduleView({ schedule }) {
  return (
    <View style={styles.scheduleItemOutterContainer}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.scheduleItemInnerContainer}>
          <Text style={styles.serviceText}>{schedule.service.name}</Text>
          <Text style={styles.dateTimeText}>{schedule.hour}</Text>
        </View>
        <Text style={styles.clientText}>{schedule.client.name}</Text>
      </Pressable>
    </View>
  );
}
