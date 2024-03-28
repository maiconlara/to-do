import {
  Button,
  createStandaloneToast,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { emptyToast } from "./components/empty-toast";

type status = "active" | "inactive";

type Form = {
  name: string | null;
  description: string | null;
  status: status;
};

function App() {
  const { toast } = createStandaloneToast();

  const createTaskForm = useForm<Form>({
    defaultValues: {
      name: null,
      description: null,
      status: "active",
    },
  });

  const { handleSubmit, register } = createTaskForm;

  const onSubmitForm = (data: Form) => {
    const isFormEmpty = data.description === null || data.name === null;

    if (isFormEmpty) {
      return emptyToast(toast);
    }

    console.log(data);
  };
  return (
    <Flex
      py={10}
      direction="column"
      maxW="100vw"
      w="full"
      minH="100vh"
      overflowX="hidden"
      justify="start"
      align="center"
      gap={12}
    >
      <Text fontSize="4xl" fontWeight="bold" color="#0d0c22">
        {"<Crie sua tarefa />"}
      </Text>

      <FormProvider {...createTaskForm}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Flex
            direction="column"
            w={{ base: "300px", md: "500px" }}
            minH="400px"
          >
            <Flex direction="column" w="full" h="full" gap={5}>
              <Input
                {...register("name")}
                rounded="full"
                placeholder="Digite o nome de sua tarefa"
                w="full"
              ></Input>
              <Textarea
                {...register("description")}
                rounded="2xl"
                placeholder="Digite a descrição da sua tarefa"
                minH="160px"
                maxH="160px"
              ></Textarea>
              <Button
                type="submit"
                rounded="full"
                fontSize="sm"
                color="white"
                bg="#322f68"
                _hover={{
                  bg: "#403d83",
                }}
              >
                Criar
              </Button>
            </Flex>
          </Flex>
        </form>
      </FormProvider>
    </Flex>
  );
}

export default App;
