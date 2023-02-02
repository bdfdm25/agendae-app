import {
  Form,
  InputLabel,
  PrimaryButton,
  SecondaryButton,
  Subtitle,
  Title,
} from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TextInput, View } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { styles } from "./styles";

export default function NewServiceView({ navigationHandler, submitHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      serviceName: "",
      serviceDuration: "",
      servicePrice: "",
    },
  });

  return (
    <Form>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Title color={GlobalStyles.colors.primary400}>
            período de serviço
          </Title>
          <Subtitle>adicione um novo serviço</Subtitle>
        </View>

        <InputLabel label="nome do serviço" />
        <View style={styles.inputInnerContainer}>
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
              />
            )}
            name="serviceName"
          />
          {errors.serviceName && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="duração do serviço (em minutos)" />
        <View style={styles.inputInnerContainer}>
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
                keyboardType="decimal-pad"
              />
            )}
            name="serviceDuration"
          />
          {errors.serviceDuration && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="valor do serviço" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskInput
                mask={Masks.BRL_CURRENCY}
                onChangeText={onChange}
                autoCorrect={false}
                style={GlobalStyles.inputField}
                placeholder="ex: R$60"
                onBlur={onBlur}
                value={value}
                keyboardType="decimal-pad"
              />
            )}
            name="servicePrice"
          />
          {errors.servicePrice && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <PrimaryButton onPress={handleSubmit(submitHandler)}>
          concluir
        </PrimaryButton>
        <SecondaryButton onPress={() => navigationHandler("ScheduleConfig")}>
          voltar
        </SecondaryButton>
      </ScrollView>
    </Form>
  );
}
