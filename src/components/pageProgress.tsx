import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PageInProgress = styled.h1`
  color: ${({theme}) => theme.colors.secondary};
  border-bottom: 2px solid ${({theme}) => theme.colors.purpleLight};
  text-align: center;
  padding: 1rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`
const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.secondary};
  margin-top: 1rem;
  gap: 20px;
`

export default function PageProgress() {
    return (
        <Container>
          <PageInProgress>Hey! 🙋‍♀️ <br/> Page in Progress...</PageInProgress>

        <LinkButton href="/">
            <FaArrowLeft
            color="rgb(130, 92, 168)"
            fontSize={40}
            cursor="pointer"
        /> To back!
        </LinkButton>
        </Container>        
    )
}