import { Box, Text, VStack } from "@chakra-ui/react";

// TODO 取得するまでのテスト変数
const roomList = ["A会議室", "B会議室", "C会議室"];

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
