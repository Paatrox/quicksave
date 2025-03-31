import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--layout-background-color);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  padding: clamp(30px, 5vw, 50px);
  max-width: 1000px;
  margin: 0 auto;
  margin-top: clamp(20px, 5vw, 150px);
`;
