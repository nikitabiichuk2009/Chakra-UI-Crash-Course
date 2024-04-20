import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import React from "react";

export default function NavBar() {
  const toast = useToast();
  return (
    // <Flex bg="gray.200" justifyContent="space-around" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="green">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
    <Flex
      as="nav"
      p="10px"
      alignItems="center"
      gap="10px"
      mb="40px"
      flexWrap={{ base: "wrap", md: "nowrap" }}
    >
      <Heading as="h1">Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="Mario" bg="white" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              5
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>sometestemail@gmail.com</Text>
        <Button
          colorScheme="teal"
          onClick={() =>
            toast({
              title: `Logged out!`,
              description: "You've successfully logged out of your account!",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            })
          }
        >
          LogOut
        </Button>
      </HStack>
    </Flex>
  );
}
