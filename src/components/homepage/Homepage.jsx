import About from '../about/About';
import Footer from '../footer/Footer';
import Highlights from '../highlights/Highlights';
import Intro from '../intro/Intro';
import LeftHalf from '../leftHalf/LeftHalf';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import './homepage.css';

function Homepage() {
  return (
        <div className='hp'>
            <div className='hp-left-container'><LeftHalf/></div>
            <div className='hp-right-container'>
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

export default Homepage;
