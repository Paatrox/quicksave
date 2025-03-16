import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { media } from "../../styles/media";

export const Form = styled.form`
  display: block;
`;

export const InputWithMargin = styled(Input)`
  margin-bottom: 22px;
`;

export const ButtonWithMargin = styled(Button)`
  margin-top: 22px;

  ${media.small} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 35px;
    padding-right: 35px;
  }
`;
