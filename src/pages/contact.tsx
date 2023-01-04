import styled from "styled-components";
// import { FaWhatsapp, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import PageProgress from "../components/pageProgress";
import MenuMobile from "../components/menuMobile";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 6rem;
  margin-top: 10rem;

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 7rem;
    padding: 1rem 1rem;
  }
`

const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 800px;
`

const Form = styled.form`
  /* z-index: 10; */
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > input {
    opacity: .8;
    padding: 8px;
    border: none;
    border-radius: 10px;
    font-family: ${({theme}) => theme.fontFamily.poppins};
    
    &:focus {
      outline: ${({theme}) => theme.colors.purple};
      border: 2px solid ${({theme}) => theme.colors.purple};
      opacity: .95;
    }
  }

  > textarea {
    opacity: .8;
    padding: 8px;
    border: none;
    border-radius: 10px;
    font-family: ${({theme}) => theme.fontFamily.poppins};

    &:focus {
      outline: ${({theme}) => theme.colors.purple};
      border: 2px solid ${({theme}) => theme.colors.purple};
      opacity: .95;
    }
  }

  @media (max-width: 600px) {
    margin-top: -2rem ;
  }
`

const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h1 {
    color: ${({theme}) => theme.colors.purpleLigth};
    padding-bottom: 8px;
    border-bottom: 1px solid ${({theme}) => theme.colors.purpleLigth};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0 30px;

      > svg {
        color: ${({theme}) => theme.colors.secondary};
        opacity: .2;
        font-size: 1.7rem;
      }

      > span {
        color: ${({theme}) => theme.colors.purpleLigth};
        font-size: .8rem;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 3rem;
      border-bottom: 1px solid ${({theme}) => theme.colors.purpleLigth};
    }
`

export default function Contact() {
  return (
    <>
    <Header>
      <MenuMobile/>
    </Header>

    <Main>
      <Container>

    {/* <PageProgress/> */}
            <ContainerContact>
          <h1>Fale comigo</h1>

          <div>
            <div>
              <FiMail/>
              <span>renata_rko@hotmail.com</span>
            </div>
            <div>
              <FiMapPin/>
              <span>Campo Grande - MS</span>
            </div>
            <div>
              <FiPhone/>
              <span>(67) 99168-7767</span>
            </div>
          </div>
          
        </ContainerContact>

        <Form>
            <input type="text" name="name" id="name" placeholder="Nome"/>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <textarea name="textarea" id="textarea" placeholder="Mensagem" rows={5}></textarea>
        </Form>
      </Container>
      </Main>
      <Footer/>
    </>
  );
}
