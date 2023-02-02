import { InputLabel, LoadingButton, PrimaryButton, Subtitle, Title } from "@components/ui";
import Form from "@components/ui/Form";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "@styles/styles";
import { useState } from "react";
import { Platform, Pressable, Switch, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Controller, useForm } from "react-hook-form";

export function SignupView({ signinHandler, signupHandler, loading }) {
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            password: "",
            serviceProvider: false,
            client: false,
        },
    });

    const [newPasswordVisibility, setNewPasswordVisibility] = useState(true);

    const [isSpEnabled, setIsSpEnabled] = useState(false);
    const [isClEnabled, setIsClEnabled] = useState(false);

    const toggleSpSwitch = () => {
        setIsSpEnabled((previousState) => !previousState);
        setIsClEnabled(isSpEnabled);
        setValue("serviceProvider", !isSpEnabled);
    };

    const toggleClSwitch = () => {
        setIsClEnabled((previousState) => !previousState);
        setIsSpEnabled(isClEnabled);
        setValue("client", !isClEnabled);
    };

    const spinner = <LoadingButton />;
    const signup = <PrimaryButton onPress={handleSubmit(signupHandler)}>cadastrar</PrimaryButton>;
    const signupBtn = loading ? spinner : signup;

    return (
        <Form>
            <View>
                <View style={styles.titleContainer}>
                    <Title color={GlobalStyles.colors.primary400}>Nova conta</Title>
                    <Subtitle>Preencha seus dados abaixo</Subtitle>
                </View>

                <View style={styles.inputOuterContainer}>
                    <InputLabel label="nome completo" />
                    <View style={errors.fullname ? [styles.inputInnerContainer, GlobalStyles.inputErrorStyle] : styles.inputInnerContainer}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={GlobalStyles.inputField}
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="fullname"
                        />
                    </View>

                    <InputLabel label="e-mail" />
                    <View style={errors.email ? [styles.inputInnerContainer, GlobalStyles.inputErrorStyle] : styles.inputInnerContainer}>
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
                                    keyboardType="email-address"
                                    placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="email"
                        />
                    </View>

                    <InputLabel label="senha" />
                    <View style={errors.password ? [styles.inputInnerContainer, GlobalStyles.inputErrorStyle] : styles.inputInnerContainer}>
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
                                    <Pressable onPress={() => setNewPasswordVisibility(!newPasswordVisibility)}>
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
                </View>

                <View style={styles.profileSelectorOutterContainer}>
                    <Text style={styles.profileSelectorTitle}>Qual seu perfil?</Text>
                    <View style={styles.switchGroup}>
                        <Text style={styles.profileTitle}>Prestador de Serviço</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <Switch
                                    trackColor={{
                                        false: GlobalStyles.colors.switchTrackDisable,
                                        true: GlobalStyles.colors.switchTrackEnable,
                                    }}
                                    thumbColor={
                                        isSpEnabled ? GlobalStyles.colors.switchThumbEnable : GlobalStyles.colors.switchThumbDisable
                                    }
                                    ios_backgroundColor={GlobalStyles.colors.switchIosBackground}
                                    onValueChange={toggleSpSwitch}
                                    value={isSpEnabled}
                                    style={styles.iosSwitchSize}
                                />
                            )}
                            name="serviceProvider"
                        />
                    </View>
                    <View style={styles.switchGroup}>
                        <Text style={styles.profileTitle}>Cliente</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <Switch
                                    trackColor={{
                                        false: GlobalStyles.colors.switchTrackDisable,
                                        true: GlobalStyles.colors.switchTrackEnable,
                                    }}
                                    thumbColor={
                                        isClEnabled ? GlobalStyles.colors.switchThumbEnable : GlobalStyles.colors.switchThumbDisable
                                    }
                                    ios_backgroundColor={GlobalStyles.colors.switchIosBackground}
                                    onValueChange={toggleClSwitch}
                                    value={isClEnabled}
                                    style={styles.iosSwitchSize}
                                />
                            )}
                            name="client"
                        />
                    </View>
                </View>

                <View style={styles.buttonOuterContainer}>{signupBtn}</View>

                <View style={styles.signInCallContainer}>
                    <Text style={styles.signInCallText}>
                        Já possui uma conta?{" "}
                        <Text style={styles.signInCallLink} onPress={signinHandler}>
                            Faça seu login!
                        </Text>
                    </Text>
                </View>
            </View>
        </Form>
    );
}
