import styled from "styled-components";
import Navbar from './components/navbar/Navbar.jsx'
import Intro from "./components/intro/Intro";
import Feature from "./components/features/Feature.jsx";
import PrayingTimes from "./components/prayer/PrayingTimes.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import MasjidImg from "./components/masjidImages/MasjidImg.jsx";
import Imam from "./components/imam/Imam.jsx";



function App() {


  return (
    <div>
      <Navbar />
      <Intro />
      <Feature />
      <PrayingTimes/>
      <MasjidImg />
      <Imam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
