import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  width: 100%;
  height: 100vh;
  max-width: 800px;
`;
const Container = styled.div`
  height: 85%;
  width: 70%;

  background: transparent;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 2px rgba(26, 17, 24, 0.2);

  display: flex;
  flex-direction: column;
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
