import { AGENDA, SCHEDULES } from "@mock/mock-data";
import React, { useCallback, useRef } from "react";
import { CalendarProvider, ExpandableCalendar } from "react-native-calendars";
import { FlatList } from "react-native-gesture-handler";
import AgendaItem from "./AgendaItem";
import { getTheme, themeColor } from "./styles";

const ITEMS: any[] = AGENDA;

export function AgendaView({ onDateChanged, onMonthChange }) {
  const today = new Date().toISOString();
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <CalendarProvider
      date={today.split("T")[0]}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
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
      <FlatList data={SCHEDULES} renderItem={renderItem} />
      {/* <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        scrollToNextEvent
        sectionStyle={styles.section}
      /> */}
    </CalendarProvider>
  );
}
