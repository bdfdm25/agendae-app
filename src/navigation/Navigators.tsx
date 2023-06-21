import NewService from "@screens/ServiceProvider/Onboarding/NewService";
import OpeningHours from "@screens/ServiceProvider/Onboarding/OpeningHours";
import Profile from "@screens/ServiceProvider/Onboarding/Profile";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PwdRecoveySuccessMsg from "@screens/Auth/screens/PwdRecovery/PwdRecoverySuccessMsg";
import ResetForm from "@screens/Auth/screens/PwdRecovery/ResetForm";
import SignIn from "@screens/Auth/screens/Signin";
import Signup from "@screens/Auth/screens/Signup";
import HomeClient from "@screens/Client/Home";
import Nearby from "@screens/Client/Nearby";
import HomeServiceProvider from "@screens/ServiceProvider/Home";
import Schedules from "@screens/ServiceProvider/Schedules";
import NewSchedule from "@screens/ServiceProvider/Schedules/components/NewSchedule";
import Settings from "@screens/Settings";
import { SettingsNavigator } from "@screens/Settings/SettingsNavigator";
import OnboardingContextProvider from "@store/onboarding-context";
import { GlobalStyles } from "@styles/styles";
import EmailForm from "@screens/Auth/screens/PwdRecovery/EmailForm";

export function AuthNavigator() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="Signin"
      screenOptions={{ headerTransparent: true }}
    >
      <AuthStack.Screen
        name="Signin"
        component={SignIn}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="Recovery"
        component={EmailForm}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="Reset"
        component={ResetForm}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="RecoverySuccess"
        component={PwdRecoveySuccessMsg}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
    </AuthStack.Navigator>
  );
}

export function ClientNavigator() {
  const ClientStack = createNativeStackNavigator();
  return (
    <ClientStack.Navigator
      id="Main"
      initialRouteName="Main"
      screenOptions={{ headerTransparent: true }}
    >
      <ClientStack.Screen
        name="Main"
        component={ClientTabNavigator}
        options={{
          headerShown: false,
          headerTransparent: true,
          gestureEnabled: false,
        }}
      />
    </ClientStack.Navigator>
  );
}

export function ServiceProviderNavigator() {
  const ServiceProviderStack = createNativeStackNavigator();
  return (
    <ServiceProviderStack.Navigator
      id="ServiceProviderMain"
      initialRouteName="Main"
      screenOptions={{ headerTransparent: true }}
    >
      <ServiceProviderStack.Screen
        name="Main"
        component={ServiceProviderTabNavigator}
        options={{
          headerShown: false,
          headerTransparent: true,
          gestureEnabled: false,
        }}
      />
      <ServiceProviderStack.Screen
        name="NewSchedule"
        component={ModalStackNavigator}
        options={{
          headerShown: false,
          headerTransparent: true,
          presentation: "fullScreenModal",
          animation: "slide_from_bottom",
        }}
      />
      <ServiceProviderStack.Screen
        name="ServiceProviderOnboarding"
        component={ServiceProviderOnboardingNavigator}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
    </ServiceProviderStack.Navigator>
  );
}

export function ClientTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.primary500,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeClient}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "home",
        }}
      />
      <Tab.Screen
        name="NearBy"
        component={Nearby}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "NearBy",
        }}
      />
      <Tab.Screen
        name="Schedules"
        component={Schedules}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "Schedules",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

export function ServiceProviderTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: GlobalStyles.colors.primary400,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeServiceProvider}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "home",
        }}
      />
      <Tab.Screen
        name="Schedules"
        component={Schedules}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "Schedules",
        }}
      />
      {/* <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "Stats",
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="options-outline" color={color} size={size} />
          ),
          tabBarAccessibilityLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
}

export function ServiceProviderOnboardingNavigator() {
  const ServiceProviderOnboardingStack = createNativeStackNavigator();
  return (
    <OnboardingContextProvider>
      <ServiceProviderOnboardingStack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
        }}
      >
        <ServiceProviderOnboardingStack.Screen
          name="Profile"
          component={Profile}
        />
        <ServiceProviderOnboardingStack.Screen
          name="OpeningHours"
          component={OpeningHours}
        />
        <ServiceProviderOnboardingStack.Screen
          name="NewService"
          component={NewService}
        />
      </ServiceProviderOnboardingStack.Navigator>
    </OnboardingContextProvider>
  );
}

export function ModalStackNavigator() {
  const ModalStack = createNativeStackNavigator();
  return (
    <ModalStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ModalStack.Screen name="New" component={NewSchedule} />
    </ModalStack.Navigator>
  );
}

// TODO: estudar necessidade de um menu do tipo drawer
// export function DrawerNavigator() {
//     const Drawer = createDrawerNavigator();
//     return (
//         <Drawer.Navigator
//             screenOptions={{
//                 headerStyle: {
//                     backgroundColor: "#FFF",
//                 },
//                 headerTintColor: "#000",
//                 headerShadowVisible: true,
//             }}
//         >
//             <Drawer.Screen
//                 name="Home"
//                 component={TabNavigator}
//                 options={{ drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />, headerTitle: "" }}
//             />
//             <Drawer.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{ drawerIcon: ({ color, size }) => <Ionicons name="person-circle" color={color} size={size} />, headerTitle: "" }}
//             />
//             <Drawer.Screen
//                 name="Payment"
//                 component={Payment}
//                 options={{ drawerIcon: ({ color, size }) => <Ionicons name="card" color={color} size={size} />, headerTitle: "" }}
//             />
//             <Drawer.Screen
//                 name="Chat"
//                 component={Chat}
//                 options={{
//                     drawerIcon: ({ color, size }) => <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />,
//                     headerTitle: "",
//                 }}
//             />
//             <Drawer.Screen
//                 name="Logout"
//                 component={DumbScreen}
//                 options={{
//                     drawerIcon: ({ color, size }) => <Ionicons name="log-out-outline" color={color} size={size} />,
//                     headerTitle: "",
//                 }}
//             />
//         </Drawer.Navigator>
//     );
// }
