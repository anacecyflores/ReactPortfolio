import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


// import ParticlesBackground from "./components/config/ParticlesBackground";
// function App() {
//   return (
//     <div classname = "App">
//       <ParticlesBackground />
//     <div className="particlesheader">
//     <h1>Particles.js</h1>
//     </div>
//      </div>
//   );
// }

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
  
    </>
    
  );
};

export default App;
