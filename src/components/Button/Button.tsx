import { Container } from "./Button.styles";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <Container className={className} {...props}>
      {children}
    </Container>
  );
}

export default Button;
