import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../api/api";
import { IconTrashStyled } from "./DeleteAction.styles";

function DeleteAction({ id, name }: { id: string; name: string }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: api.deleteUser,
    onSuccess: () => {
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
