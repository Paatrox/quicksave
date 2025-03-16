import { Layout as LayoutContainer } from "./Layout.styles";

function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
