import { IconButton, PrimaryButton, Title } from "@components/ui";
import Form from "@components/ui/Form";
import { GlobalStyles } from "@styles/styles";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function PwdRecoveryView({ navigationHandler, submitHandler }) {
    const [inputs, setInputs] = useState({
        email: {
            value: "",
        },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue },
            };
        });
    }
    return (
        <Form>
            <View>
                <IconButton onPress={navigationHandler} icon="chevron-back" size={24} />
                <View style={styles.inputContainer}>
                    <Title color={GlobalStyles.colors.primary400}>Esqueceu sua senha?</Title>
                    <View style={styles.inputContainerInfo}>
                        <Text style={styles.inputContainerInfoText}>
                            Informe o e-mail cadastrado e enviaremos os passos para recuperar sua senha.
                        </Text>
                    </View>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            style={GlobalStyles.inputField}
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={inputChangeHandler.bind(this, "email")}
                            value={inputs.email.value}
                        />
                    </View>
                </View>
                <View>
                    <PrimaryButton onPress={() => submitHandler(inputs)}>Enviar</PrimaryButton>
                </View>
            </View>
        </Form>
    );
}
