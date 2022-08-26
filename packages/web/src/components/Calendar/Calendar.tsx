import { format, getDay, parse, startOfWeek } from "date-fns";
import { ja } from "date-fns/locale";
import React from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
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

export const Calendar: React.FC = () => {
  return (
    <BigCalendar localizer={localizer} culture="ja" startAccessor="start" endAccessor="end" style={{ height: 500 }} />
  );
};
