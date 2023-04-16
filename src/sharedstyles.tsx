import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  /* height: 100vh; */
`;

const Container = styled.section`
  max-width: 800px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 1rem;
  gap: 7rem;
  margin-top: 5rem;
  position: relative;

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    z-index: 2;
    margin-top: 3rem;
  }
`;

const CodeTag = styled.code`
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { CodeTag, Container, Main };
