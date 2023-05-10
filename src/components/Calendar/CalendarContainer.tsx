import { CalendarConfig } from "@utils/locale/LocaleConfig";
import { useState } from "react";
import CalendarView from "./CalendarView";

export default function Calendar() {
  const today = new Date();
  const monthDays = getMonthDays(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [days, setDays] = useState(monthDays);
  const [currentMonth, setCurrentMonth] = useState(
    CalendarConfig.monthNames[today.getMonth()]
  );
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  function getMonthDays(year?: number, month?: number, day?: number) {
    const date = new Date(year, month, 1);
    let week = [];

    while (date.getMonth() === month) {
      week.push({
        monthDay: date.getDate(),
        weekDay: CalendarConfig.dayNamesShort[date.getDay()],
      });
      date.setDate(date.getDate() + 1);
    }

    return week;
  }

  function getSelectedMonth(direction: string, selectedMonth: string) {
    const monthNumber = CalendarConfig.monthNames.findIndex(
      (month) => month === selectedMonth
    );
    switch (direction) {
      case "previous":
        if (selectedMonth === "Janeiro") {
          setDays(getMonthDays(currentYear - 1, 11));
          setCurrentMonth(CalendarConfig.monthNames[11]);
          setCurrentYear(currentYear - 1);
        } else {
          setDays(getMonthDays(currentYear, monthNumber - 1));
          setCurrentMonth(CalendarConfig.monthNames[monthNumber - 1]);
        }
        break;
      case "next":
        if (selectedMonth === "Dezembro") {
          setDays(getMonthDays(currentYear + 1, 0));
          setCurrentMonth(CalendarConfig.monthNames[0]);
          setCurrentYear(currentYear + 1);
        } else {
          setDays(getMonthDays(currentYear, monthNumber + 1));
          setCurrentMonth(CalendarConfig.monthNames[monthNumber + 1]);
        }
        break;
      default:
        break;
    }
  }

  return (
    <CalendarView
      selectedDay={selectedDay}
      days={days}
      currentMonth={currentMonth}
      onDateSelect={(selectedDay) => setSelectedDay(selectedDay)}
      onMonthChange={(direction: string, selectedMonth: string) =>
        getSelectedMonth(direction, selectedMonth)
      }
    />
  );
}
