import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
export default function Dashboard() {
  const tasks = useLoaderData();
  // const boxStyles = {
  //   p: "10px",
  //   bg: "purple.400",
  //   color: "white",
  //   m: "10px",
  //   textAlign: "center",
  //   filter: "blur(1px)",
  //   ":hover": {
  //     bg: "blue.200",
  //     color: "black",
  //   },
  // };
  return (
    // <Container my="3rem" padding="10px" as="section" maxWidth="4xl" py="20px">
    //   <Heading>Chakra UI</Heading>
    //   <Text ml="3rem">Some text...</Text>
    //   <Text ml="3rem" color="blue.400" fontWeight="bold">
    //     Some text...
    //   </Text>
    //   <Box my="30px" bg="orange" p="2rem">
    //     <Text ml="3rem" color="white">
    //       This is a box
    //     </Text>
    //   </Box>
    //   <Box sx={boxStyles}>HELLO WORLD!</Box>
    // </Container>
    <SimpleGrid spacing="10px" minChildWidth="300px">
      {tasks.map((task) => {
        return (
          <Card key={task.id} borderTop="8px" borderColor="teal">
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}

export async function taskLoader() {
  const response = await fetch("http://localhost:3000/tasks");
  console.log(response);
  return response.json();
}
