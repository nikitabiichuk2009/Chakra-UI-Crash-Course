import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  const toast = useToast();
  return (
    <Box maxWidth="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel fontWeight="600">Task Name</FormLabel>
          <Input
            bg="white"
            placeholder="Task Name"
            type="text"
            name="title"
            required
            minLength={7}
          />
          <FormHelperText>Enter a descriptive task name!</FormHelperText>
        </FormControl>
        <FormControl isRequired mb="40px">
          <FormLabel fontWeight="600">Task Description</FormLabel>
          <Textarea name="description" bg="white" placeholder="Description" />
          <FormHelperText>Enter a detailed description!</FormHelperText>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="teal" />
          <FormLabel fontWeight="600" ml="10px" mb="0">
            Make this a priority task
          </FormLabel>
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};
