import About from "../../components/About/about";
import CardProjects from "../../components/CardProjects";
import CardSlider from "../../components/CardSlider";
import Courses from "../../components/Courses";
import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Photo from "../../components/Photo";
import Service from "../../components/Service";
import Title from "../../components/Title";
import { Container } from "../../sharedstyles";

import items from "../../components/CardProjects/mock";
import * as S from "./style";

export default function Home() {
  return (
    <S.Wrapper>
      <Container>
        <Header children />
      </Container>

      <Container>
        <S.SectionHome>
          <div>
            <Title />
          </div>
          <Photo />
        </S.SectionHome>
      </Container>

      <Container>
        <S.SectionAbout>
          <About />
        </S.SectionAbout>
      </Container>

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

      <Container>
        <S.SectionCourses>
          <S.SectionCard>
            <CardSlider />
          </S.SectionCard>

          <div>
            <Courses />
          </div>
        </S.SectionCourses>
      </Container>

      <Container>
        <S.SectionFooter>
          <Footer />
        </S.SectionFooter>
      </Container>
    </S.Wrapper>
  );
}
