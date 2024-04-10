import { HashRouter, Routes, Route } from 'react-router-dom';
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
import Drafts from '../src/v2_components/drafts/Drafts';
import About from '../src/v2_components/about/About';

function App() {
  return (
      <Routes>
      {/* <Route path="/" element={<Homepage />}> */}
        <Route path="/" element={<Homepage />} /> 
        <Route path="/drafts" element={<Drafts />} /> 
        <Route path="/about" element={<About />} /> 
        {/* <Route path="/portfolio" element={<ProjectsSite/>}/> */}
        {/* <Route path="/projects/airate" element={<Airate/>}/>
        <Route path="/projects/fliprem" element={<Fliprem/>}/>
        <Route path="/projects/noted" element={<Noted/>}/> */}
        <Route path="/*" element={<NoPage />} />

    </Routes>
  );
}

export default App;
