import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServiceList from "../index";

export function ServicesNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      id="Services"
      initialRouteName="ServiceList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ServiceList" component={ServiceList} />
    </Stack.Navigator>
  );
}
