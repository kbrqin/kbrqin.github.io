import About from '../about/About';
import Projects from '../projects/Projects';
import leftpic from '../../img/leftpic.png';
import './lefthalf.css';

const LeftHalf = () => {
    return (
        <div className='lh'>
            <div className="lh-wrapper">
                <div className="lh-pic-wrapper">
                    <img src={leftpic} alt='self illustration' className='lh-pic'></img>
                </div>
                <div className="lh-nav-wrapper">
                    <div className="lh-subsect">
                        <a href="#home" className='lh-link'>&gt; Home</a>
                    </div>
                    <div className="lh-subsect">
                        <a href="#highlights" className='lh-link'>&gt; Highlights</a>
                    </div>
                    <div className="lh-subsect">
                        <a href="#skills" className='lh-link'>&gt; Skills</a>
                    </div>
                    <div className="lh-subsect">
                        <a href="#projects" className='lh-link'>&gt; Projects</a>
                    </div>
                    <div className="lh-subsect">
                        <a href="#about" className='lh-link'>&gt; About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftHalf;