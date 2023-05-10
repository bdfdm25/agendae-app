import { IconButton } from "@components/ui";
import { GlobalStyles } from "@styles/styles";
import { CalendarConfig } from "@utils/locale/LocaleConfig";
import { useLayoutEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function CalendarView({
  selectedDay,
  days,
  currentMonth,
  onDateSelect,
  onMonthChange,
}) {
  const [date, setDate] = useState(new Date().getDate());
  const [monthDays, setMonthDays] = useState([]);
  const [month, setMonth] = useState(
    CalendarConfig.monthNames[new Date().getMonth()]
  );

  useLayoutEffect(() => {
    setDate(selectedDay);
    setMonthDays(days);
    setMonth(currentMonth);
  }, [selectedDay, days, currentMonth, onMonthChange]);

  const getItemLayout = (data, index) => ({
    length: 45,
    offset: 55 * index,
    index,
  });

  function renderCalendarItem(itemData) {
    let pressable = styles.calendarDayOutterContainer;
    let monthDayTextStyle = styles.monthDayText;
    let weekDayTextStyle = styles.weekDayText;

    if (date === itemData.item.monthDay) {
      pressable = { ...styles.calendarDayOutterContainer, ...styles.active };
      monthDayTextStyle = { ...styles.monthDayText, ...styles.activeText };
      weekDayTextStyle = { ...styles.weekDayText, ...styles.activeText };
    }

    return (
      <Pressable
        onPress={() => {
          onDateSelect(itemData.item.monthDay);
        }}
        style={pressable}
      >
        <View style={styles.calendarDayInnerContainer}>
          <Text style={monthDayTextStyle}>{itemData.item.monthDay}</Text>
          <Text style={weekDayTextStyle}>{itemData.item.weekDay}</Text>
        </View>
      </Pressable>
    );
  }

  function getInitialIndex(monthDays: Array<any>): number {
    return monthDays.findIndex((day) => day.monthDay === date);
  }

  return (
    <View style={styles.rootContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onPress={() => onMonthChange("previous", month)}
          icon="arrow-back-circle-sharp"
          size={24}
        />
        <Text style={GlobalStyles.sectionTitle}>{month}</Text>
        <IconButton
          onPress={() => onMonthChange("next", month)}
          icon="arrow-forward-circle-sharp"
          size={24}
        />
      </View>
      <View style={styles.calendarList}>
        <FlatList
          initialScrollIndex={getInitialIndex(monthDays)}
          horizontal={true}
          data={monthDays}
          keyExtractor={(item) => item.monthDay}
          renderItem={renderCalendarItem}
          style={{ marginHorizontal: 10 }}
          getItemLayout={getItemLayout}
        />
      </View>
    </View>
  );
}
