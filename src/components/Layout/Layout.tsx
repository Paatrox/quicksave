import { Container } from "./Layout.styles";

function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default Layout;
