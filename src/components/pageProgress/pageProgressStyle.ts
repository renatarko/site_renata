import styled from "styled-components";

import Link from "next/link";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageInProgress = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.purpleLight};
  text-align: center;
  padding: 1rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1rem;
  gap: 20px;
`;
