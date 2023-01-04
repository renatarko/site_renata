import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  width: 100vw;
  height: auto;
  /* position: relative; */
  /* max-width: 1200px; */

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

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
`;

const CodeTag = styled.code`
  border-radius: 5px;
  /* margin: 0 0.75rem;
  padding: 0.75rem; */
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, CodeTag };
