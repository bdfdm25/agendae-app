import { FlatList, View } from "react-native";
import Appointment from "./Appointment/AppointmentContainer";
import { styles } from "./styles";

export default function AppointmentsListView({ appointments }) {
  function renderAppointmentItem(appointmentList) {
    return <Appointment appointment={appointmentList.item} />;
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderAppointmentItem}
        maxToRenderPerBatch={5}
      />
    </View>
  );
}
