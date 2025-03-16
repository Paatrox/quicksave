import Layout from "../../components/Layout/Layout";
import FormAddUser from "../../features/FormAddUser/FormAddUser";
import UsersList from "../../features/UsersList/UsersList";
import { Container, FormSection, ListSection } from "./Home.styles";

function Home() {
  return (
    <Layout>
      <Container>
        <FormSection>
          <FormAddUser />
        </FormSection>
        <ListSection>
          <UsersList />
        </ListSection>
      </Container>
    </Layout>
  );
}

export default Home;
