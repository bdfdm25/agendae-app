import React, { useRef } from "react";
import { CalendarProvider, ExpandableCalendar } from "react-native-calendars";
import { FlatList } from "react-native-gesture-handler";
import AgendaItem from "./AgendaItem";
import { getTheme, themeColor } from "./styles";
import { localeToIsoDate } from "@utils/locale/LocaleConfig";
import EmptyScheduleWarning from "@components/Schedules/EmptyScheduleWarning";
import { View } from "react-native";

export function AgendaView({ onDateChanged, scheduleList }) {
  const today = localeToIsoDate(new Date().toLocaleDateString());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  function renderItem(schedule) {
    return <AgendaItem schedule={schedule} />;
  }

  function Schedules() {
    return (
      <FlatList
        data={scheduleList}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
      />
    );
  }

  function Root() {
    if (scheduleList.length > 0) {
      return <Schedules />;
    }

    if (scheduleList.length == 0) {
      return (
        <View style={{ marginHorizontal: 18 }}>
          <EmptyScheduleWarning
            label="novo agendamento"
            message="Adicione um novo agendamento para o dia de hoje."
            route="NewSchedule"
          />
        </View>
      );
    }
  }

  return (
    <CalendarProvider
      date={today}
      onDateChanged={onDateChanged}
      showTodayButton
      theme={todayBtnTheme.current}
      todayBottomMargin={16}
    >
      <ExpandableCalendar
        theme={theme.current}
        initialPosition={ExpandableCalendar.positions.CLOSED}
        firstDay={1}
        allowShadow={false}
        disableWeekScroll={true}
        closeOnDayPress={true}
      />
      <Root />
    </CalendarProvider>
  );
}
