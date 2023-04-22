import { Platform } from "react-native";

export const themeColor = "#3E04C3";
export const lightThemeColor = "#E4D9FD";

export function getTheme() {
  const disabledColor = "grey";

  return {
    // arrows
    arrowColor: "#2D0689",
    arrowStyle: { padding: 0 },
    // knob
    expandableKnobColor: themeColor,
    // month
    monthTextColor: "#3E04C3",
    textMonthFontSize: 16,
    textMonthFontFamily: "poppins-bold",
    textMonthFontWeight: "bold" as const,
    // day names
    textSectionTitleColor: "black",
    textDayHeaderFontSize: 12,
    textDayHeaderFontFamily: "poppins-regular",
    textDayHeaderFontWeight: "normal" as const,
    // dates
    dayTextColor: themeColor,
    todayTextColor: "#FFD700",
    textDayFontSize: 18,
    textDayFontFamily: "poppins-medium",
    // textDayFontWeight: "500" as const,
    textDayStyle: { marginTop: Platform.OS === "android" ? 2 : 4 },
    // selected date
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: "#FFD700",
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: "#FFD700",
    disabledDotColor: disabledColor,
    dotStyle: { marginTop: -1 },
  };
}
