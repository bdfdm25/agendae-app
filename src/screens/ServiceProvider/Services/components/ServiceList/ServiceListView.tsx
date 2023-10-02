import { FlatList, SafeAreaView } from "react-native";
import ServiceItem from "../ServiceItem";

export function ServiceListView({ serviceList }) {
  function renderItem(service) {
    return <ServiceItem service={service} />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={serviceList}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
      />
    </SafeAreaView>
    // <ServiceItem service={[]} />
  );
}
