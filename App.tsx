import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import AppointmentsContextProvider from "@store/appointments-context";
import AuthContextProvider, {
  AuthContext,
} from "@store/authentication-context";
import { RoleEnum } from "@utils/enums/role.enum";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import {
  AuthNavigator,
  ClientNavigator,
  ServiceProviderNavigator,
} from "./src/navigation/Navigators";
import HttpContextProvider from "@store/http-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function prepare() {
      try {
        const storedToken = await AsyncStorage.getItem("accessToken");

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }

        await Font.loadAsync({
          "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
          "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
          "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
          "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
          "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
          "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
          "poppins-thin": require("./assets/fonts/Poppins-Thin.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [authCtx]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    if (authCtx.userInfo.role === RoleEnum.SERVICE_PROVIDER) {
      return <ServiceProviderNavigator />;
    }
    return <ClientNavigator />;
  }

  function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
      <NavigationContainer>
        {!authCtx.isAuthenticated && <AuthNavigator />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <HttpContextProvider>
          <AppointmentsContextProvider>
            <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
              <Navigation />
            </View>
          </AppointmentsContextProvider>
        </HttpContextProvider>
      </AuthContextProvider>
    </>
  );
}
