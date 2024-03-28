import { CreateToastFnReturn } from "@chakra-ui/react";

export const emptyToast = (toast: CreateToastFnReturn) => {
  const toastId = "toast";

  return (
    !toast.isActive(toastId) &&
    toast({
      id: toastId,
      position: "bottom",
      status: "error",
      title: "Erro ao criar a tarefa",
      description:
        "Parece que alguns dados da tarefa ficaram em branco, por favor preencha todos os campos!",
      duration: 1000 * 3,
      isClosable: true,
    })
  );
};
