import FadeInLeft from "./components/Animations/FadeInLeft";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundAnimationLayer from "./components/Animations/Background";
import AboutUs from "./components/AboutUs";
import Activities from "./components/Activities";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

// load config
import { menuItems } from "./config/menuList";
import { faqLists } from "./config/faqLists";

function App() {
  return (
    <>
      <div>
        <Header>
          <Navbar menuItems={menuItems} />
        </Header>
        <Hero />
        <MainLayout>
          <FadeInLeft>
            <AboutUs />
          </FadeInLeft>
          <FadeInLeft>
            <Activities />
          </FadeInLeft>
          <FadeInLeft>
            <FAQ faqLists={faqLists} />
          </FadeInLeft>
          <FadeInLeft>
            <Contact />
          </FadeInLeft>
        </MainLayout>
        <Footer />
      </div>
      <BackgroundAnimationLayer />
    </>
  );
}

export default App;
