import { Box } from "@chakra-ui/react";
import moment from "moment";
import React, { useMemo } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export const Main: React.FC = () => {
  return (
    <>
      <Box>this is Box component.</Box>
      <Box sx={{ height: "600" }}>
        <Calendar />
      </Box>
    </>
  );
};

const Calendar = () => {
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(),
    }),
    []
  );

  return (
    <BigCalendar
      localizer={momentLocalizer(moment)}
      startAccessor="start"
      endAccessor="end"
      defaultDate={defaultDate}
      style={{ height: 500 }}
    />
  );
};
