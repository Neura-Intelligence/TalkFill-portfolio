import "./App.css";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/HeroSection";
import OurProducts from "./components/home/OurProducts";
import OurServices from "./components/home/OurServices";
import OurTeam from "./components/home/OurTeam";
import OurTechStack from "./components/home/OurTechStack";

function App() {
  return (
    <div className="">
      <HeroSection />
      <OurServices/>
      <OurProducts />
      <AboutUs/>
      <OurTechStack/>
      <OurTeam/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
