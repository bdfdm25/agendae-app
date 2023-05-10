import { useCallback } from "react";
import { AgendaView } from "./AgendaView";

export default function Agenda() {
  const onDateChanged = useCallback((date, updateSource) => {
    console.log("ExpandableCalendarScreen onDateChanged: ", date, updateSource);
  }, []);

  const onMonthChange = useCallback(({ dateString }) => {
    console.log("ExpandableCalendarScreen onMonthChange: ", dateString);
  }, []);

  return (
    <AgendaView onDateChanged={onDateChanged} onMonthChange={onMonthChange} />
  );
}
