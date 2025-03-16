import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../api";
import { UserResponseType } from "../../../types/types";
import { IconTrashStyled } from "./DeleteAction.styles";

function DeleteAction({ id, name }: { id: string; name: string }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: api.deleteUser,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["usersList"] });
      const previousList = queryClient.getQueryData<UserResponseType>([
        "usersList",
      ]);

      queryClient.setQueryData(["usersList"], (old: UserResponseType[]) => {
        return old.filter((user) => user.id !== id);
      });

      return { previousList };
    },
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(["usersList"], context?.previousList);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["usersList"] });
    },
  });

  const handleClick = () => {
    mutation.mutate(id);
  };

  return (
    <div onClick={handleClick} title={`Usuń użytkownika ${name}`}>
      <IconTrashStyled />
    </div>
  );
}

export default DeleteAction;
