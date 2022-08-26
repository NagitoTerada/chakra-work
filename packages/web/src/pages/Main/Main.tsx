import { Box } from "@chakra-ui/react";
import React from "react";
import { Calendar } from "src/components";

export const Main: React.FC = () => {
  return (
    <>
      <Box>this is Box component.</Box>
      <Box>
        <Calendar />
      </Box>
    </>
  );
};
