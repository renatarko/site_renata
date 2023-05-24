// import About from "../../components/About/about";
// import CardProjects from "../../components/CardProjects";
// import CardSlider from "../../components/CardSlider";
// import Courses from "../../components/Courses";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import Photo from "../../components/Photo";
// import Service from "../../components/Service";
// import Title from "../../components/Title";
// import { Container } from "../../sharedstyles";

// import { Element } from "react-scroll";
// import items from "../../components/CardProjects/mock";
// import * as S from "./style";

// export default function Home() {
//   return (
//     <S.Wrapper>
//       <Container>
//         <Header/>
//       </Container>

//       <Element name="home">
//         <Container>
//           <S.SectionHome>
//             <Title />
//             <Photo />
//           </S.SectionHome>
//         </Container>
//       </Element>
      
//       <S.SectionAbout>
//         <Container>
//           <About />
//         </Container>
//       </S.SectionAbout>

//       <Element name="services">
//         <Container>
//           <S.SectionService>
//             <Service />
//             <div className="containerCards">
//               {items.map((item) => {
//                 return (
//                   <CardProjects
//                     key={item.id}
//                     imageSrc={item.imageSrc}
//                     imageAlt={item.description}
//                     url={item.url}
//                     description={item.description}
//                   />
//                 );
//               })}
//             </div>
//           </S.SectionService>
//         </Container>
//       </Element>

//       <Element name="courses">            
//         <S.SectionCourses>
//           <Container>
//             <S.SectionCard>
//               <CardSlider />
//             </S.SectionCard>
              
//             <div>
//               <Courses />
//             </div>
//           </Container>
//         </S.SectionCourses>
//       </Element>

//       <Container>
//         <S.SectionFooter>
//           <Footer />
//         </S.SectionFooter>
//       </Container>
//     </S.Wrapper>
//   );
// }
