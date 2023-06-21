import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EmptyScheduleListView } from "./EmptyScheduleListView";
import { useNavigation } from "@react-navigation/core";

export type RootStackParamList = {
  ServiceProviderOnboarding: { screen: string } | undefined;
  Schedules: { screen: string } | undefined;
};

export default function EmptyScheduleList({ label, message, route }) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <EmptyScheduleListView
      label={label}
      message={message}
      route={route}
      navigation={navigation}
    />
  );
}
