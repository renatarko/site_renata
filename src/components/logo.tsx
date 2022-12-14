import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const Box = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: ${({theme}) => theme.colors.primary};
  border-radius: 50%;
  overflow: hidden;

  /* &::before {
    content: "";
    position: absolute;
    inset: -10px 20px;
    transition: 0.4s;
    background: linear-gradient(115deg, rgb(221, 151, 219), rgb(130, 92, 168));
    animation: ${rotate} 4s linear infinite;
  }

  &:hover::before {
    inset: 0px 0px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: ${({theme}) => theme.colors.primary};
    border-radius: 50%;
    z-index: 1;
  } */
`

const Content = styled.div`
  position: absolute;
  inset: 5px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  z-index: 2;
  border-radius: 50%;
  overflow: hidden;
`

const Imagem = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 415px) {
    visibility: hidden;
  }

`

const Text = styled.h3`
  display: none;
  width: 200px;
  color: ${({theme}) => theme.colors.purple};
  position: absolute;
  top: 1.8rem;
  left: 6rem;

  @media (max-width: 600px) {
    display: none;
  }
`

const hoverAnimationName = keyframes`
  from {
    width:15rem;
    left: 20px;
  }
  to {
    width: 15rem;
    left: 6rem;
    top: 1.8rem;
  }
`

const ContentText = styled.div`
  display: flex;
  gap: 5px;
  position: relative;
  transition: .5s;

  &:hover ${Text} {
    display: block;
    animation: ${hoverAnimationName} 1s;
  }
`

export default function Logo() {
  return (
    <ContentText>
    <Box>
      <Content>
        <Imagem src="./assets/rk.png"></Imagem>
      </Content>
    </Box>
      <Text>Renata Karolina</Text>
    </ContentText>   
  )
}
  