import About from "../../components/About";
import CardProjects from "../../components/CardProjects";
import CardSlider from "../../components/CardSlider";
import Courses from "../../components/Courses";
import Footer from "../../components/Footer";
import Photo from "../../components/Photo";
import Service from "../../components/Service";
import Title from "../../components/Title";
import stack from "../../components/stackMock";
import { Container } from "../../sharedstyles";

import { Element } from "react-scroll";
import items from "../../components/CardProjects/mock";
import * as S from "./style";
import Image from "next/image";

export default function Home() {
  return (
    <S.Wrapper>
      <Element name="home">
        <Container>
          <S.SectionHome>
            <Title />
            <Photo />
          </S.SectionHome>
        </Container>
      </Element>

      <S.SectionAbout>
        <Container>
          <About />
        </Container>
      </S.SectionAbout>

      <Element name="service">
        <Container>
          <S.SectionService>
            <Service />
            <div className="containerCards">
              {items.map((item) => {
                return (
                  <CardProjects
                    key={item.id}
                    imageSrc={item.imageSrc}
                    imageAlt={item.description}
                    url={item.url}
                    description={item.description}
                  />
                );
              })}
            </div>
          </S.SectionService>
        </Container>
      </Element>

      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "3rem",
            gap: "2rem",
            color: "white",
          }}
        >
          <h2>Minha Stack</h2>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {stack.map((item, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: "1rem",
                    overflow: "hidden",
                    width: "4rem",
                    height: "4rem",
                  }}
                >
                  <Image
                    width={200}
                    height={200}
                    src={item.path}
                    alt={item.tech}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Element name="courses">
        <S.SectionCourses>
          <Container>
            <S.SectionCard>
              <CardSlider />
            </S.SectionCard>

            <div>
              <Courses />
            </div>
          </Container>
        </S.SectionCourses>
      </Element>

      <Container>
        <S.SectionFooter>
          <Footer />
        </S.SectionFooter>
      </Container>
    </S.Wrapper>
  );
}
