import styled from "styled-components";
import { media } from "../../styles/media";

export const Container = styled.article`
  display: flex;

  ${media.small} {
    flex-wrap: wrap;
  }
`;

export const FormSection = styled.section`
  flex: 1;
  flex-basis: 350px;
  margin-right: 50px;

  ${media.small} {
    margin-right: 0px;
  }
`;

export const ListSection = styled.section`
  flex: 1;
  flex-basis: 350px;
  padding-left: 50px;
  border-left: 1px solid var(--border-color-gray-light);

  ${media.small} {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid var(--border-color-gray-light);
    padding-top: 30px;
    margin-top: 30px;
  }
`;
