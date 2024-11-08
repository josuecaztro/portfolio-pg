import logo from './logo.svg';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Containers/Home/homeindex';
import AboutPage from './Containers/About/aboutindex';
import ContactPage from './Containers/Contact/contactindex';
import PortfolioPage from './Containers/Portfolio/portfolioindex';
import ResumePage from './Containers/Resume/resumeindex';
import SkillsPage from './Containers/Skills/skillsindex';
import './App.css';

function App() {

  //This is an attempt to fix the root pages issue. If no luck, delete this up to function invoke. 
  /* UPDATE: Okay, it looks like for now it works.
   The only true way to know for sure is to wait
  until we code the navbar and we can toggle
  between Routes. Thats how we will know for sure. */ 
  const navigate = useNavigate();
  function RedirectToHome(){
    useEffect(() => {
    navigate("/");
    },[navigate]);
  }
  RedirectToHome();

  return (
    <div className="App">

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
