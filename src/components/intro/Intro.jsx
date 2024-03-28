import Resume from '../resume/Resume';
import resume from '../../files/resume.pdf';
import portfolio from '../../files/portfolio.pdf';
import './intro.css';

const Intro = () => {
    return (
        <div className='i' id='home'>
            <div className='i-wrapper'>
                <div className='i-name'>Kim Guo</div>
                <div className='i-title-container'>
                   <div className='i-title-wrapper'>
                        <div className='i-title'>Designer</div>
                        <div className='i-title'>Developer</div>
                        <div className='i-title'>Designer</div>
                    </div>
                </div>
                <div className='i-resume-button'>
                    [&nbsp;
                    <a href={resume} className='i-res'>Resume</a>
                    &nbsp;|&nbsp;  
                    <a href={portfolio} className='i-res'>Portfolio</a>
                    &nbsp;] 
                    </div>
                    
            </div>
        </div>
    )
}

export default Intro;