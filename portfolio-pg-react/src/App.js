import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Containers/Home/homeindex';
import AboutPage from './Containers/About/aboutindex';
import ContactPage from './Containers/Contact/contactindex';
import PortfolioPage from './Containers/Portfolio/portfolioindex';
import ResumePage from './Containers/Resume/resumeindex';
import SkillsPage from './Containers/Skills/skillsindex';
import Navbar from './Components/NavBar/navbarindex';
import Particles from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import './App.css';

function App() {

  // const navigate = useNavigate();
  // function RedirectToHome(){
  //   useEffect(() => {
  //   navigate("/");
  //   },[]);
  // }
  // RedirectToHome();

  const handleInit = async (main) => {
    await loadFull(main);
  }

  return (
    <div className="App">

    <Particles id="particles" options={particles} init={handleInit}/>

    <Navbar/>

    <Routes>
      <Route index path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/resume" element={<ResumePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/portfolio" element={<PortfolioPage/>}/>
      <Route path="/skills" element={<SkillsPage/>}/>
    </Routes>

    </div>
  );
}

export default App;
