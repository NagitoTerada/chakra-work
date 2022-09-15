import { format, getDay, parse, startOfWeek } from "date-fns";
import { ja } from "date-fns/locale";
import React from "react";
import { Calendar as BigCalendar, CalendarProps as BigCalendarProps, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    ja: ja,
  },
});

export interface CalendarProps extends Omit<BigCalendarProps, "localizer"> {}

export const Calendar: React.FC<CalendarProps> = (props) => {
  return <BigCalendar localizer={localizer} culture="ja" {...props} />;
};
