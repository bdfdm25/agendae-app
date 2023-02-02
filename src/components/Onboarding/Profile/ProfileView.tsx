import {
  IconButton,
  InputLabel,
  Title,
  PrimaryButton,
  Form,
  Subtitle,
} from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TextInput, View } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { styles } from "./styles";

export default function ProfileView({ exitHandler, submitHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "John Doe",
      email: "john.doe@test.com",
      phone: "",
      address: "",
      naturalPersonDocument: "",
      legalPersonDocument: "",
    },
  });

  return (
    <Form>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Title color={GlobalStyles.colors.primary400}>dados pessoais</Title>
            <IconButton onPress={exitHandler} icon="close" size={24} />
          </View>
          <Subtitle>complete seus dados abaixo</Subtitle>
        </View>

        {/* GET from user login info */}
        <InputLabel label="nome completo" />
        <View style={[styles.inputInnerContainer, styles.disableInputColor]}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={GlobalStyles.inputField}
                autoCorrect={false}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable={false}
              />
            )}
            name="fullName"
          />
          {/* {errors.fullName && <Text style={GlobalStyles.inputErrorMessage}>preenchimento obrigatório</Text>} */}
        </View>

        {/* GET from user login info and block field */}
        <InputLabel label="e-mail" />
        <View style={[styles.inputInnerContainer, styles.disableInputColor]}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={GlobalStyles.inputField}
                autoCorrect={false}
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                editable={false}
              />
            )}
            name="email"
          />
          {/* {errors.email && <Text style={GlobalStyles.inputErrorMessage}>preenchimento obrigatório</Text>} */}
        </View>

        <InputLabel label="telefone" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskInput
                mask={Masks.BRL_PHONE}
                onChangeText={onChange}
                autoCorrect={false}
                style={GlobalStyles.inputField}
                onBlur={onBlur}
                value={value}
                keyboardType="decimal-pad"
                placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
              />
            )}
            name="phone"
          />
          {errors.phone && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="endereco" />
        <View style={styles.inputInnerContainer}>
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
              />
            )}
            name="address"
          />
          {errors.address && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="CPF" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskInput
                mask={Masks.BRL_CPF}
                onChangeText={onChange}
                autoCorrect={false}
                style={GlobalStyles.inputField}
                onBlur={onBlur}
                value={value}
                keyboardType="decimal-pad"
                placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
              />
            )}
            name="naturalPersonDocument"
          />
          {errors.naturalPersonDocument && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="CNPJ" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskInput
                mask={Masks.BRL_CNPJ}
                onChangeText={onChange}
                autoCorrect={false}
                style={GlobalStyles.inputField}
                onBlur={onBlur}
                value={value}
                keyboardType="decimal-pad"
                placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
              />
            )}
            name="legalPersonDocument"
          />
          {errors.legalPersonDocument && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>
        <PrimaryButton onPress={handleSubmit(submitHandler)}>
          próximo
        </PrimaryButton>
        {/* <View style={{ alignItems: "center" }}>
                    <IconButton onPress={handleSubmit(onSubmit)} icon="arrow-forward-circle-outline" size={68} />
                </View> */}
      </ScrollView>
    </Form>
  );
}
