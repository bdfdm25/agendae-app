import { GlobalStyles } from "@styles/styles";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

function Form({ children }) {
    return (
        <KeyboardAvoidingView style={[GlobalStyles.rootContainer]} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default Form;
