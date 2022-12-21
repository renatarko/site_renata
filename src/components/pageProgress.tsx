import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import styled from "styled-components"

const PageInProgress = styled.h1`
  color: ${({theme}) => theme.colors.secondary};
  border-bottom: 2px solid ${({theme}) => theme.colors.purpleLigth};
  text-align: center;
`
const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
 color: ${({theme}) => theme.colors.secondary};
`

export default function PageProgress() {
    return (
        <>
        <PageInProgress>Hey! 🙋‍♀️ <br/> Page in Progress...</PageInProgress>

        <LinkButton href="/">
            <FaArrowLeft
            color="rgb(130, 92, 168)"
            fontSize={40}
            cursor="pointer"
        /> To back!
        </LinkButton>
</>
        
    )
}