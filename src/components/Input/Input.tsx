import { useState, useEffect } from "react";
import {
  Wrapper,
  Label,
  Desc,
  ErrorMessage,
  Input as StyledInput,
  IconXStyled,
} from "./Input.styles";

type InputProps = {
  label: string;
  desc?: string;
  className?: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({
  value,
  label,
  desc,
  className,
  errorMessage,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [labelActive, setLabelActive] = useState<boolean>(false);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  useEffect(() => {
    setLabelActive(hasFocus || value !== "");
  }, [hasFocus, value]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false);
    onBlur?.(e);
  };

  const hasError = !!errorMessage;

  return (
    <div className={className}>
      <Wrapper>
        <Label
          $isActive={labelActive}
          $hasFocus={hasFocus}
          $hasError={hasError}
        >
          {label}
        </Label>
        <StyledInput
          {...props}
          value={value}
          $hasError={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Wrapper>
      {errorMessage && (
        <ErrorMessage>
          <IconXStyled />
          <span>{errorMessage}</span>
        </ErrorMessage>
      )}
      {desc && <Desc>{desc}</Desc>}
    </div>
  );
}

export default Input;
