import {
  Form,
  PrimaryButton,
  SecondaryButton,
  Subtitle,
  Title,
} from "@components/ui";
import AccordionList from "@components/ui/AccordionList";
import { GlobalStyles } from "@styles/styles";
import { LocaleConfig } from "@utils/locale/LocaleConfig";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export default function OpeningHoursView({ navigationHandler, submitHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      workDayStart: "",
      workDayEnd: "",
      workHourStart: "",
      workHourEnd: "",
    },
  });

  const workDays = LocaleConfig.dayNames;
  const workHours = LocaleConfig.workHours;

  return (
    <Form>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Title color={GlobalStyles.colors.primary400}>
            período de serviço
          </Title>
          <Subtitle>preencha seu dia e horário de trabalho</Subtitle>
        </View>

        {/* CADASTRO DOS DIAS DE TRABALHO */}
        <View style={styles.scheduleOutterContainer}>
          <Text style={styles.scheduleTitle}>dias de trabalho</Text>
          <View style={styles.scheduleInnerContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <AccordionList
                    title="início"
                    itemList={workDays}
                    onSelect={(item: string) => {
                      onChange(item);
                    }}
                  />
                );
              }}
              name="workDayStart"
            />
            {errors.workDayStart && (
              <Text style={GlobalStyles.inputErrorMessage}>
                preenchimento obrigatório
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <AccordionList
                    title="fim"
                    itemList={workDays}
                    onSelect={(item: string) => {
                      onChange(item);
                    }}
                  />
                );
              }}
              name="workDayEnd"
            />
            {errors.workDayEnd && (
              <Text style={GlobalStyles.inputErrorMessage}>
                preenchimento obrigatório
              </Text>
            )}
          </View>
        </View>

        {/* CADASTRO DO HORARIO DE FUNCIONAMENTO */}
        <View style={styles.scheduleOutterContainer}>
          <Text style={styles.scheduleTitle}>horário de trabalho</Text>
          <View style={styles.scheduleInnerContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <AccordionList
                    title="início:"
                    itemList={workHours}
                    onSelect={(item: string) => {
                      onChange(item);
                    }}
                  />
                );
              }}
              name="workHourStart"
            />
            {errors.workHourStart && (
              <Text style={GlobalStyles.inputErrorMessage}>
                preenchimento obrigatório
              </Text>
            )}
          </View>

          <View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => {
                return (
                  <AccordionList
                    title="fim:"
                    itemList={workHours}
                    onSelect={(item: string) => {
                      onChange(item);
                    }}
                  />
                );
              }}
              name="workHourEnd"
            />
            {errors.workHourEnd && (
              <Text style={GlobalStyles.inputErrorMessage}>
                preenchimento obrigatório
              </Text>
            )}
          </View>
        </View>

        <PrimaryButton onPress={handleSubmit(submitHandler)}>
          próximo
        </PrimaryButton>
        <SecondaryButton onPress={() => navigationHandler("Profile")}>
          voltar
        </SecondaryButton>
      </ScrollView>
    </Form>
  );
}
