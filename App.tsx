import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import SchedulesContextProvider from "@store/schedules-context";

import {
  AuthNavigator,
  ServiceProviderNavigator,
} from "@navigation/Navigators";
import AuthContextProvider, {
  AuthContext,
} from "@screens/Auth/context/authentication-context";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { GlobalStyles } from "@styles/styles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const authCtx = useContext(AuthContext);

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: GlobalStyles.colors.primary500,
      secondary: GlobalStyles.colors.primary300,
    },
  };

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
    return <ServiceProviderNavigator />;
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
        <SchedulesContextProvider>
          <PaperProvider>
            <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
              <Navigation />
            </View>
          </PaperProvider>
        </SchedulesContextProvider>
      </AuthContextProvider>
    </>
  );
}
