import React, { useCallback, useRef } from "react";
import { StyleSheet } from "react-native";
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";
import AgendaItem from "./AgendaItem";
import { agendaItems } from "./agendaItems";
import { getTheme, lightThemeColor, themeColor } from "./theme";

const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const AgendaView = (props: Props) => {
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const onDateChanged = useCallback((date, updateSource) => {
    console.log("ExpandableCalendarScreen onDateChanged: ", date, updateSource);
  }, []);

  const onMonthChange = useCallback(({ dateString }) => {
    console.log("ExpandableCalendarScreen onMonthChange: ", dateString);
  }, []);

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
      showTodayButton
      theme={todayBtnTheme.current}
      todayBottomMargin={16}
    >
      <ExpandableCalendar theme={theme.current} firstDay={1} />
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        sectionStyle={styles.section}
      />
    </CalendarProvider>
  );
};

export default AgendaView;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: "#FFD700",
  },
  section: {
    backgroundColor: lightThemeColor,
    color: "#3E04C3",
    textTransform: "capitalize",
  },
});
