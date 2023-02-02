import { IconButton, InputLabel, Title } from "@components/ui";
import Divider from "@components/ui/Divider";
import Form from "@components/ui/Form";
import { GlobalStyles } from "@styles/styles";
import { ScrollView, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function ProfileView({ navigationHandler }) {
    return (
        <Form>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Title color={GlobalStyles.colors.primary500}>Meus dados</Title>
                    <IconButton onPress={navigationHandler} icon="close" size={24} />
                </View>

                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="nome completo" />
                </View>

                <View style={styles.inputInnerContainer}>
                    <TextInput
                        style={GlobalStyles.inputField}
                        autoCorrect={false}
                        placeholder="data de nascimento"
                        keyboardType="numbers-and-punctuation"
                    />
                </View>

                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="CPF" />
                </View>

                <Divider />

                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="nome da barbearia" />
                </View>

                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="CNPJ" />
                </View>

                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="endereco" />
                </View>

                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="telefone para contato" />
                </View>

                <InputLabel label="Endereco" />
                <View style={styles.inputInnerContainer}>
                    <TextInput style={GlobalStyles.inputField} autoCorrect={false} placeholder="" />
                </View>
            </ScrollView>
        </Form>
    );
}
