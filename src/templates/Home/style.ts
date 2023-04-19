import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const Section = styled.section`
  width: 100%;
  padding: 8rem 4rem;
`;

export const SectionHome = styled(Section)`
  display: flex;
  justify-content: space-between;
  /* z-index: -1; */
`;

export const SectionAbout = styled(Section)`
  width: 100%;
  padding: 0 6rem;
  padding-top: 2.45rem;
`;

export const SectionService = styled(Section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .containerCards {
    width: 40%;
  }
`;

export const SectionCard = styled(Section)`
  padding: 0;
  position: absolute;
  top: -7rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
`;

export const SectionCourses = styled(Section)`
  ${({ theme }) => css`
    min-height: 50rem;
    background-image: url("../../assets/bg.png");
    background-position: center center;
    background-size: cover;
    position: relative;
    z-index: 1;
    margin-top: 5rem;
    padding-top: 20rem;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: ${theme.colors.baseDark};
      position: absolute;
      opacity: 0.95;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
  `}
`;

export const SectionFooter = styled(Section)`
  padding: 4rem 0;
`;
