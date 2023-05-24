import styled from "styled-components";

// const Main = styled.main`
//   width: 100%;
//   /* height: 100vh; */
// `;

const Container = styled.div`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  /* margin: auto; */
  padding-left: 4rem;
  padding-right: 4rem;

  @media (max-width: 700px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const CodeTag = styled.code`
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { CodeTag, Container };
