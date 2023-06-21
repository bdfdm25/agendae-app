import {
  Form,
  IconButton,
  InputLabel,
  LoadingButton,
  PrimaryButton,
  Subtitle,
  Title,
} from "@components/ui";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Platform, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function ResetFormView({
  navigationHandler,
  resetHandler,
  loading,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      token: "",
      password: "",
    },
  });

  const [newPasswordVisibility, setNewPasswordVisibility] = useState(true);

  const spinner = <LoadingButton />;
  const reset = (
    <PrimaryButton onPress={handleSubmit(resetHandler)}>enviar</PrimaryButton>
  );
  const resetBtn = loading ? spinner : reset;

  return (
    <Form>
      <View>
        <IconButton onPress={navigationHandler} icon="chevron-back" size={24} />
        <View style={{ marginTop: "40%" }}>
          <View style={styles.titleContainer}>
            <Title color={GlobalStyles.colors.primary400}>Nova senha</Title>
            <Subtitle>
              Preencha com o código enviado via e-mail e com sua nova senha.
            </Subtitle>
          </View>
          <View style={styles.inputGroupOuterContainer}>
            <View style={styles.inputOuterContainer}>
              <InputLabel label="código de validação" />
              <View
                style={
                  errors.token
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
                      style={GlobalStyles.inputField}
                      onBlur={onBlur}
                      value={value}
                      textAlign={"center"}
                      textContentType={"oneTimeCode"}
                      maxLength={6}
                      keyboardType="decimal-pad"
                    />
                  )}
                  name="token"
                />
              </View>
              {errors.token && (
                <Text style={GlobalStyles.inputErrorMessage}>
                  preenchimento obrigatório
                </Text>
              )}
            </View>

            <View style={styles.inputOuterContainer}>
              <InputLabel label="nova senha" />
              <View
                style={
                  errors.password
                    ? [
                        styles.inputInnerContainer,
                        styles.passwordInputInnerContainer,
                        GlobalStyles.inputErrorStyle,
                      ]
                    : [
                        styles.inputInnerContainer,
                        styles.passwordInputInnerContainer,
                      ]
                }
              >
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <TextInput
                        style={styles.passwordInputField}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={newPasswordVisibility}
                        textContentType={"password"}
                        value={value}
                        onChangeText={onChange}
                      />
                      <Pressable
                        onPress={() =>
                          setNewPasswordVisibility(!newPasswordVisibility)
                        }
                      >
                        <Ionicons
                          style={{ padding: Platform.OS === "android" ? 3 : 0 }}
                          name={newPasswordVisibility ? "eye" : "eye-off"}
                          size={22}
                          color={GlobalStyles.colors.primary400}
                        />
                      </Pressable>
                    </>
                  )}
                  name="password"
                />
              </View>
              {errors.password && (
                <Text style={GlobalStyles.inputErrorMessage}>
                  preenchimento obrigatório
                </Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.buttonOuterContainer}>{resetBtn}</View>
      </View>
    </Form>
  );
}
