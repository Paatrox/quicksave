import styled from "styled-components";
import { IconTrash } from "../../Icons/Icons";

export const IconTrashStyled = styled(IconTrash)`
  width: 18px;
  height: 18px;
  opacity: 0.2;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
    color: var(--error-color);
  }
`;
