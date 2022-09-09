import { Box, Text, VStack } from "@chakra-ui/react";

export const MeetingRooms: React.FC = () => {
  return (
    <VStack>
      {roomList.map((room, index) => (
        <Box key={index} w="100%" borderColor="GrayText" borderRadius="5px" p="2" backgroundColor="gray.100">
          <VStack spacing={3}>
            <Text fontSize="xl" as="b" color="teal.900">
              {room}
            </Text>
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

const roomList = ["A会議室", "B会議室", "C会議室"];

/**
 * 
 *   {data?.roomList?.map((room) => (
        <Box
          key={room?.dataValue}
          w="100%"
          borderColor="GrayText"
          borderRadius="5px"
          p={2}
          backgroundColor="gray.100"
          onClick={() => onClick(room as Room)}
          as="button"
        >
          <HStack spacing={5} mx={2}>
            <Text color="gray.600">{room?.floor}</Text>
            <Stack spacing={1}>
              <Text fontSize="xl" as="b" color="teal.900">
                {room?.room}
              </Text>
              <Text color="gray.600" align="left">
                {room?.capacity}名
              </Text>
            </Stack>
          </HStack>
        </Box>
      ))}
 */
