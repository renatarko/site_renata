import { useState } from "react";

import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import Footer from "../../components/Footer/index";
import Header from "../../components/Header/header";
import MenuMobile from "../../components/menuMobile/menuMobile";
import { Container } from "../../sharedstyles";
import { ContainerContact, Form, InputButton } from "./contactStyle";

interface IContact {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [contact, setContact] = useState<IContact>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  }

  function sendEmail(e) {
    e.preventDefault();

    const sendMessage = document.querySelector(".sendMessage");
    console.log(sendMessage);

    if (validationInput()) {
      emailjs
        .sendForm(
          "emailMessage",
          "template_4dbzh8s",
          e.target,
          "1lxy4vpb4pSh47JcJ"
        )
        .then(
          () => {
            sendMessage.innerHTML = "Mensagem enviada com sucesso! 👍";
          },
          (error) => {
            alert(error);
          }
        );
    }
    e.target.reset();
  }

  function validationInput() {
    const spanName = document.querySelector(".name");
    const spanEmail = document.querySelector(".email");
    const spanTextarea = document.querySelector(".message");

    if (contact.name === "") {
      console.log("name");
      spanName.innerHTML = "Preencha seu nome";
      return false;
    } else {
      spanName.innerHTML = "";
    }

    if (contact.email === "") {
      spanEmail.innerHTML = "Preencha seu email";
      return false;
    } else if (!checkEmail(contact.email)) {
      spanEmail.innerHTML = "Preencha um e-mail válido";
      return false;
    } else {
      spanEmail.innerHTML = "";
    }

    if (contact.message === "") {
      spanTextarea.innerHTML = "Escreva sua mensagem";
      return false;
    } else {
      spanTextarea.innerHTML = "";
      return true;
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
        <MenuMobile />
      </Header>

      <Container>
        <ContainerContact>
          <h1>Fale comigo</h1>

          <div>
            <div>
              <FiMail />
              <span>renata_rko@hotmail.com</span>
            </div>
            <div>
              <FiMapPin />
              <span>Campo Grande - MS</span>
            </div>
            <div>
              <FiPhone />
              <span>(67) 99168-7767</span>
            </div>
          </div>
        </ContainerContact>

        <Form onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              onChange={handleChange}
            />
            <span className="name" />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <span className="email" />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Mensagem"
              rows={5}
              onChange={handleChange}
            ></textarea>
            <span className="message" />
            <p className="sendMessage" />
          </div>

          <InputButton type="submit" value="Enviar" />
        </Form>
      </Container>

      <Footer />
    </>
  );
}
