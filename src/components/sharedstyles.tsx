import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: auto;
  max-width: 1200px;
`;
const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const CodeTag = styled.code`
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, CodeTag };
