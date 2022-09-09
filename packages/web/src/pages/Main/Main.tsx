import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Calendar } from "src/components";
import { MeetingRooms } from "src/pages/MeetingRooms";

export const Main: React.FC = () => {
  return (
    <>
      <HStack alignItems="flex-start">
        <Box w="30%" m="3">
          <MeetingRooms />
        </Box>
        <Box flex="1">
          <Calendar />
        </Box>
      </HStack>
    </>
  );
};
