import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage';
import NoPage from './components/nopage/NoPage';
import Resume from './components/resume/Resume';
import resume from './files/resume.pdf';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />}> */}
        <Route index element={<Homepage />} />
        <Route path="resume" element={<Resume/>}/>
        <Route path="nopage" element={<NoPage />} />
      {/* </Route> */}
    </Routes>
  
  );
}

export default App;
