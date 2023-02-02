import ErrorOverlay from "@components/ui/ErrorOverlay";
import PwdRecoveryView from "./PwdRecoveryView";

export default function PwdRecovery({ navigation }) {
    function navigationHandler() {
        navigation.goBack();
    }

    function submitHandler(recoveryEmail: string) {
        console.log("[RECOVERY EMAIL]", recoveryEmail);
        navigation.navigate("RecoverySuccess");
    }

    return <PwdRecoveryView navigationHandler={navigationHandler} submitHandler={(recoveryEmail) => submitHandler(recoveryEmail)} />;
}
