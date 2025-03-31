import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--text-color-white);
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  margin-left: 25px;
  flex-grow: 1;
`;

export const LetterIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: var(--text-color-white);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  align-self: center;
  background-color: var(--secondary-color);
  ${Container}:hover & {
    background-color: var(--tertiary-color);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  visibility: hidden;
  ${Container}:hover & {
    visibility: visible;
  }
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const Row = styled.p`
  margin: 0 0 0 0;
  font-size: 14px;
  color: var(--text-color-gray);
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--text-color);
  }
`;
