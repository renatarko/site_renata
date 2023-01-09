import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import MenuMobile from "../components/menuMobile";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";


const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  padding-bottom: 2rem;
  gap: 6rem;
  margin-top: 10rem;
  z-index: 2;

  @media (max-width: 1070px) {
    margin-top: 6rem;
    padding-bottom: 3rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 7rem;
    padding: 1rem 1rem;
  }
`

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 800px;
`

const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    width: 100%;
    display: grid;

    > span {
      color: ${({theme}) => theme.colors.purpleLight};
      font-size: .8rem;
      padding-left: 10px;
  }

    > input {
      width: 100%;
      opacity: .8;
      padding: 5px;
      border-radius: 10px;
      font-family: ${({theme}) => theme.fontFamily.poppins};
      border: 1px solid ${({theme}) => theme.colors.primary};
      outline: none;

    &:focus {
      border: 1px solid ${({theme}) => theme.colors.purple};
      opacity: .95;
    }

    &:hover {
      border: 1px solid ${({theme}) => theme.colors.purple};
    }

    &::placeholder {
      color: ${({theme}) => theme.colors.purple};
    }
  }

  > textarea {
    width: 100%;
    opacity: .8;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    font-family: ${({theme}) => theme.fontFamily.poppins};
    outline: none;

    &:focus {
      border: 1px solid ${({theme}) => theme.colors.purple};
      opacity: .95;
    }

    &:hover {
      border: 1px solid ${({theme}) => theme.colors.purple};
    }

    &::placeholder {
      color: ${({theme}) => theme.colors.purple};
    }
  }
  }

  @media (max-width: 600px) {
    width: 70%;
    margin-top: -2rem ;
  }
`

const InputButton = styled.input`
  background-color: ${({theme}) => theme.colors.purple};
  font-family: ${({theme}) => theme.fontFamily.poppins};
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: ${({theme}) => theme.colors.purpleLight};
    transform: scale(1.01);
  }
`

const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h1 {
    color: ${({theme}) => theme.colors.purpleLight};
    padding-bottom: 8px;
    border-bottom: 1px solid ${({theme}) => theme.colors.purpleLight};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0 20px;

      > svg {
        color: ${({theme}) => theme.colors.secondary};
        opacity: .2;
        font-size: 1.7rem;
      }

      > span {
        color: ${({theme}) => theme.colors.purpleLight};
        font-size: .8rem;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 3rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.purpleLight};
    }
`

interface IContact {
  name: string
  email: string
  message: string
}

export default function Contact() {
  
  function sendEmail(e) {
    e.preventDefault();

    if (validationInput()) {
      emailjs.sendForm('emailMessage', 'template_4dbzh8s', e.target, '1lxy4vpb4pSh47JcJ')
      .then(() => {
          alert("Mensagem enviada com sucesso! 👍");
      }, (error) => {
          alert(error);
      });

      e.target.reset()
    } 
}

  const [contact, setContact] = useState<IContact | null>(null)

  function handleChange(event) {
    const { name, value} = event.target
    setContact({...contact, [name]: value})
   }
 
  function validationInput() {

    const spanEmail = document.querySelector(".email")
    
    if(contact.name === "") {
      const spanName = document.querySelector(".name")
      spanName.innerHTML = "Preencha seu nome"
      return false
    }

    if (contact.email === "") {
      spanEmail.innerHTML = "Preencha seu email"
    } else if (!checkEmail(contact.email)) {
      spanEmail.innerHTML = "Preencha um e-mail válido"
    }

    if(contact.message === "") {
      const spanTextarea = document.querySelector(".textarea")
      spanTextarea.innerHTML = "Escreva sua mensagem"
      return false
    }
  }

  function checkEmail(email: string) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  return (
  <>
    <Header>
      <MenuMobile/>
    </Header>

    <Main>
      <Container>
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

        <Form onSubmit={sendEmail}>
          <div>
            <input type="text" name="name" id="name" placeholder="Nome" onChange={handleChange}/>
            <span className="name"></span>
          </div>
          
          <div>
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
            <span className="email"></span>
          </div>
          
          <div>
            <textarea name="message" id="message" placeholder="Mensagem" rows={5} onChange={handleChange}></textarea>
            <span className="textarea"></span>
          </div>
          
          <InputButton type="submit" value="Enviar"/>
        </Form>
      </Container>
    </Main>
  <Footer/>
  </>
  );
}
