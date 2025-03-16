import { Container } from "./EmptyList.styles";

function EmptyList({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default EmptyList;
