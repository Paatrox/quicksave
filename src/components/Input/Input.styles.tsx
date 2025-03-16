import styled from "styled-components";
import { IconX } from "../Icons/Icons";

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label<{
  $isActive: boolean;
  $hasFocus: boolean;
  $hasError: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  color: var(--text-color-gray-light);
  transition: all 0.1s ease;
  pointer-events: none;
  background: var(--layout-background-color);
  padding: 0 8px;
  border-radius: 4px;

  ${({ $isActive }) =>
    $isActive &&
    `
    top: 0;
    font-size: 13px;
  `}

  ${({ $hasFocus }) =>
    $hasFocus &&
    `
    color: var(--text-color) !important;
  `}

  ${({ $hasError, $isActive }) =>
    $hasError &&
    $isActive &&
    `
    color: var(--error-color);
  `}
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  padding: 15px 17px;
  border: 1px solid var(--border-color-gray);
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-family: var(--font-family);

  ${({ $hasError }) =>
    $hasError &&
    `
    border-color: var(--error-color);
  `}

  &:focus {
    border-color: var(--text-color);
  }
`;

export const Desc = styled.div`
  font-size: 12px;
  margin-top: 7px;
  color: var(--text-color-gray);
  &:empty {
    display: none;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  margin-top: 10px;
  gap: 5px;
  align-items: center;
  color: var(--error-color);
  display: inline-flex;
  margin-left: 0px;
  position: relative;
`;

export const IconXStyled = styled(IconX)`
  width: 18px;
  height: 18px;
  fill: var(--error-color);
`;
