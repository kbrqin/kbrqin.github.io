import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Highlights from './components/highlights/Highlights';
import Intro from './components/intro/Intro';
import LeftHalf from './components/leftHalf/LeftHalf';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
        <div className='app'>
        <div className='left-container'><LeftHalf/></div>
        <div className='right-container'>
          <Intro/>
          <Highlights/>
          <Skills/>
          <Projects/>
          <About/>
          <Footer/>
        </div>
        </div>
  );
}

export default App;
