import * as AppleAuthentication from "expo-apple-authentication";
import { StyleSheet } from "react-native";

function AppleAuth() {
  async function signIn() {
    try {
      const credentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log("[APPLE CREDENTIALS]", credentials);
      // signed in
    } catch (e) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  }

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={28}
      style={styles.buttonSize}
      onPress={signIn}
    />
  );
}

export default AppleAuth;

const styles = StyleSheet.create({
  buttonSize: {
    width: 50,
    height: 50,
  },
});
