import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../components/Onboarding/Profile";
import Notifications from "./components/Notifications";
import Settings from "./SettingsContainer";
import Help from "./components/Help";

export function SettingsNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            id="Settings"
            initialRouteName="SettingsMenu"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="SettingsMenu" component={Settings} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
    );
}
