import {
  Form,
  IconButton,
  InputLabel,
  LoadingButton,
  PrimaryButton,
  Title,
} from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function EmailFormView({
  navigationHandler,
  submitHandler,
  loading,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const spinner = <LoadingButton />;
  const reset = (
    <PrimaryButton onPress={handleSubmit(submitHandler)}>enviar</PrimaryButton>
  );
  const resetBtn = loading ? spinner : reset;

  return (
    <Form>
      <View>
        <IconButton onPress={navigationHandler} icon="chevron-back" size={24} />
        <View style={styles.inputContainer}>
          <Title color={GlobalStyles.colors.primary400}>
            Esqueceu sua senha?
          </Title>
          <View style={styles.inputContainerInfo}>
            <Text style={styles.inputContainerInfoText}>
              Informe o e-mail cadastrado e enviaremos os passos para recuperar
              sua senha.
            </Text>
          </View>
          <View style={styles.inputOuterContainer}>
            <InputLabel label="email" />
            <View
              style={
                errors.email
                  ? [styles.inputInnerContainer, GlobalStyles.inputErrorStyle]
                  : styles.inputInnerContainer
              }
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={GlobalStyles.inputField}
                    onBlur={onBlur}
                    value={value}
                    keyboardType="email-address"
                  />
                )}
                name="email"
              />
            </View>
            {errors.email && (
              <Text style={GlobalStyles.inputErrorMessage}>
                preenchimento obrigatório
              </Text>
            )}
          </View>
        </View>
        <View style={styles.buttonOuterContainer}>{resetBtn}</View>
      </View>
    </Form>
  );
}
