import {
  IconButton,
  PrimaryButton,
  Title,
  InputLabel,
  Form,
} from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";
import { CalendarConfig } from "@utils/locale/LocaleConfig";
import AccordionList from "@components/ui/AccordionList";

export function NewScheduleView({ submitHandler, exitHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clientName: "",
      serviceType: "",
      serviceDate: "",
      serviceTime: "",
      servicePrice: "",
    },
  });

  const workHours = CalendarConfig.workHours;

  return (
    <Form>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Title color={GlobalStyles.colors.primary500}>Novo agendamento</Title>
          <IconButton onPress={exitHandler} icon="close" size={24} />
        </View>
        <InputLabel label="nome do cliente" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
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
            name="clientName"
          />
          {errors.clientName && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="tipo de serviço" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
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
            name="serviceType"
          />
          {errors.serviceType && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="dia do serviço" />
        <View style={styles.inputInnerContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskInput
                mask={Masks.DATE_DDMMYYYY}
                onChangeText={onChange}
                autoCorrect={false}
                style={GlobalStyles.inputField}
                placeholder={`ex: ${new Date().toLocaleDateString("pt-Br")}`}
                placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
                onBlur={onBlur}
                value={value}
                keyboardType="decimal-pad"
              />
            )}
            name="serviceDate"
          />
          {errors.serviceDate && (
            <Text style={GlobalStyles.inputErrorMessage}>
              preenchimento obrigatório
            </Text>
          )}
        </View>

        <InputLabel label="horário do serviço" />
        <View style={{ marginBottom: 20 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <AccordionList
                  title=""
                  itemList={workHours}
                  onSelect={(item: string) => {
                    onChange(item);
                  }}
                />
              );
            }}
            name="serviceTime"
          />
          {errors.serviceTime && (
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
                placeholderTextColor={GlobalStyles.colors.inputPlaceholderColor}
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
        <View style={{ marginTop: 18 }}>
          <PrimaryButton onPress={handleSubmit(submitHandler)}>
            Salvar
          </PrimaryButton>
        </View>
      </ScrollView>
    </Form>
  );
}
