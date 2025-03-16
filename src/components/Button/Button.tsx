import { Button as ButtonStyled } from "./Button.styles";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <ButtonStyled className={className} {...props}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
