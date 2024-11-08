import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Containers/Home/homeindex';
import AboutPage from './Containers/About/aboutindex';
import ContactPage from './Containers/Contact/contactindex';
import PortfolioPage from './Containers/Portfolio/portfolioindex';
import ResumePage from './Containers/Resume/resumeindex';
import SkillsPage from './Containers/Skills/skillsindex';
import './App.css';

function App() {
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
