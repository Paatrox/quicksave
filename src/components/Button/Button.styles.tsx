import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color-white);
  border-radius: 10px;
  border: none;
  padding: 13px 24px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    filter: brightness(1.12);
  }
`;
