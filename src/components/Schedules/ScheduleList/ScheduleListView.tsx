import { FlatList, View } from "react-native";
import Schedule from "./Schedule/ScheduleContainer";
import { styles } from "./styles";

export default function ScheduleListView({ schedules }) {
  function renderItem(schedules) {
    return <Schedule schedule={schedules.item} />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        maxToRenderPerBatch={5}
      />
    </View>
  );
}
