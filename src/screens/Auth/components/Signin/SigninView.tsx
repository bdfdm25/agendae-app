import {
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

export function SigninView({
  signupHandler,
  signinHandler,
  passwordRecoveryHandler,
  loading,
}) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const spinner = <LoadingButton />;
  const login = (
    <PrimaryButton onPress={handleSubmit(signinHandler)}>entrar</PrimaryButton>
  );
  const loginBtn = loading ? spinner : login;

  return (
    <View style={styles.innerContainer}>
      <View style={styles.titleContainer}>
        <Title color={GlobalStyles.colors.primary400}>agendaê</Title>
        <Subtitle>Bem vindo de volta</Subtitle>
      </View>

      <View style={styles.inputOuterContainer}>
        <InputLabel label="e-mail" />
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
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={GlobalStyles.inputField}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="ex: teste@mail.com"
                placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
        </View>

        <InputLabel label="senha" />
        <View
          style={
            errors.password
              ? [styles.inputInnerContainer, GlobalStyles.inputErrorStyle]
              : styles.inputInnerContainer
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
                  secureTextEntry={passwordVisibility}
                  textContentType={"password"}
                  value={value}
                  onChangeText={onChange}
                />
                <Pressable
                  onPress={() => setPasswordVisibility(!passwordVisibility)}
                >
                  <Ionicons
                    style={{ padding: Platform.OS === "android" ? 3 : 0 }}
                    name={passwordVisibility ? "eye" : "eye-off"}
                    size={22}
                    color={GlobalStyles.colors.primary400}
                  />
                </Pressable>
              </>
            )}
            name="password"
          />
        </View>
        <Text
          style={styles.forgotPasswordText}
          onPress={passwordRecoveryHandler}
        >
          Esqueceu sua senha?
        </Text>
      </View>

      <View style={styles.buttonOuterContainer}>{loginBtn}</View>

      <View style={styles.signUpCallContainer}>
        <Text style={styles.signUpCallText}>
          Ainda não tem uma conta?{" "}
          <Text style={styles.signUpCallLink} onPress={signupHandler}>
            Crie uma agora!
          </Text>
        </Text>
      </View>
    </View>
  );
}
