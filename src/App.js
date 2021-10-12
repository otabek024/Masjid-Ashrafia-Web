import styled from "styled-components";
import Navbar from './components/navbar/Navbar.jsx'
import Intro from "./components/intro/Intro";
import Feature from "./components/features/Feature.jsx";
import PrayingTimes from "./components/prayer/PrayingTimes.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";



function App() {


  return (
    <div>
      <Navbar />
      <Intro />
      <Feature />
      <PrayingTimes/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
