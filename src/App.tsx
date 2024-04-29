import FadeInLeft from "./components/Animations/FadeInLeft";
import Container from "./components/Container";
import Hero from "./components/Hero";
import IntroductionBox from "./components/IntrodcutionBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Container>
        <FadeInLeft>
          <IntroductionBox title="LinuxClubとは？" />
          <IntroductionBox title="活動内容" />
        </FadeInLeft>
      </Container>
    </>
  );
}

export default App;
