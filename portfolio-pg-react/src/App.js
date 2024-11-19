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
// import Particles from 'react-tsparticles';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import './App.css';

import { useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

function App() {

  const [init, setInit] = useState(false);

  // const navigate = useNavigate();
  // function RedirectToHome(){
  //   useEffect(() => {
  //   navigate("/");
  //   },[]);
  // }
  // RedirectToHome();

  const handleInit = async (main) => {
    console.log('Initializing particles...');
    await loadFull(main);
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  

  const myOptions = 
    {
      background: {
        color: {
          value: "#1d1d1d",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
  }
  return (
    <div className="App">


<Particles id="particles" options={myOptions} init={handleInit}/>
{/* <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={myOptions}/> */}



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
