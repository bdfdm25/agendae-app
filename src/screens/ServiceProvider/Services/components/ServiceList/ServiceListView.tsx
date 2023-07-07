import { FlatList, View } from "react-native";
import ServiceItem from "../ServiceItem";

export function ServiceListView({ serviceList }) {
  function renderItem(service) {
    return <ServiceItem service={service} />;
  }

  return (
    <FlatList
      data={serviceList}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
    />
    // <ServiceItem service={[]} />
  );
}
