import { HashRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import './App.css';
// import Homepage from './components/homepage/Homepage';
import NoPage from './components/nopage/NoPage';
// import Resume from './components/resume/Resume';
import resume from './files/resume.pdf';
// import ProjectsSite from './components/projects-site/ProjectsSite';
// import Airate from './components/projects-site/individual-pages/airate/Airate';
// import Fliprem from './components/projects-site/individual-pages/fliprem/Fliprem';
// import Noted from './components/projects-site/individual-pages/sitenoted/Noted';

import Header from '../src/v2_components/header/Header';
import Homepage from '../src/v2_components/homepage/Homepage';
import Works from './v2_components/works/Works';
import About from '../src/v2_components/about/About';
import CSC from './v2_components/csc_page/CSC';
import Airate from './v2_components/airate_page/Airate';
import Skinhance from './v2_components/skinhance_page/Skinhance';
import HT6 from './v2_components/ht6_page/HT6';



function App() {
  return (
      <Routes>
      {/* <Route path="/" element={<Homepage />}> */}
        <Route path="/" element={<Homepage />} /> 
        <Route path="/works" element={<Works />} /> 
        <Route path="/about" element={<About />} /> 
        {/* <Route path="/portfolio" element={<ProjectsSite/>}/> */}
        {/* <Route path="/projects/airate" element={<Airate/>}/>
        <Route path="/projects/fliprem" element={<Fliprem/>}/>
        <Route path="/projects/noted" element={<Noted/>}/> */}
        <Route path="/*" element={<NoPage />} />


        <Route path="/UW_CS_Club" element={<CSC/>}/>
        <Route path="/Airate" element={<Airate/>}/>
        <Route path="/Skinhance" element={<Skinhance/>}/>
        <Route path="/Hack_the_6ix" element={<HT6/>}/>
    </Routes>
    // <ScrollRestoration/>
  );
}

export default App;
