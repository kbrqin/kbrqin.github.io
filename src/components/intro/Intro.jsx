import Resume from '../resume/Resume';
import resume from '../../files/resume.pdf';
import './intro.css';

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-wrapper'>
                <div className='i-name'>Kim Guo</div>
                <div className='i-title-container'>
                   <div className='i-title-wrapper'>
                        <div className='i-title'>Designer</div>
                        <div className='i-title'>Developer</div>
                        <div className='i-title'>Designer</div>
                    </div>
                </div>
                <div className='i-resume-button'><a href={resume} className='i-res'>Resume</a></div>
            </div>
        </div>
    )
}

export default Intro;