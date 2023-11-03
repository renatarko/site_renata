import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;

export const Container = styled.div`
  margin-top: 4rem;
  flex: 1 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
