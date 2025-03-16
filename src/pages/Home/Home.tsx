import Layout from "../../components/Layout/Layout";
import { Container, FormSection, ListSection } from "./Home.styles";
import FormAddUser from "../../features/FormAddUser/FormAddUser";
import UsersList from "../../features/UsersList/UsersList";

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
