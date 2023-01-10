import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1065px) {
    position: relative;
  }
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 1rem;
  gap:7rem;
  margin-top: 5rem;
  position: relative;

  @media (max-width: 1010px) {
    padding: .5rem 1rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    z-index: 2;
  }
`;

const CodeTag = styled.code`
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, CodeTag };
