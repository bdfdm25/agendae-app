import { StackActions } from "@react-navigation/native";
import { AuthContext } from "@store/authentication-context";
import { useContext } from "react";
import { Alert } from "react-native";
import { SettingsView } from "./SettingsView";

export default function Settings({ navigation }) {
  const authCtx = useContext(AuthContext);
  function logOutHandler() {
    Alert.alert("Sair", "Deseja sair do app?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Sair",
        onPress: () => {
          authCtx.logout();
        },
      },
    ]);
  }

  return <SettingsView logOutHandler={logOutHandler} navigation={navigation} />;
}
