import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageInProgress = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.purpleLight};
  text-align: center;
  padding: 1rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1rem;
  gap: 20px;
`;

export default function PageProgress() {
  return (
    <Container>
      <PageInProgress>
        Hey! 🙋‍♀️ <br /> Page in Progress...
      </PageInProgress>
    </Container>
  );
}
