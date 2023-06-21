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
      name: "",
      duration: "",
      price: "",
    },
  });

  return (
    <Form>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Title color={GlobalStyles.colors.primary400}>serviço prestado</Title>
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
            name="name"
          />
          {errors.name && (
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
            name="duration"
          />
          {errors.duration && (
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
            name="price"
          />
          {errors.price && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <View style={styles.buttonOuterContainer}>
          <PrimaryButton onPress={handleSubmit(submitHandler)}>
            concluir
          </PrimaryButton>
          <SecondaryButton onPress={() => navigationHandler("ScheduleConfig")}>
            voltar
          </SecondaryButton>
        </View>
      </ScrollView>
    </Form>
  );
}
