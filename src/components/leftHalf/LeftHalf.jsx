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
                        &gt; <a href="#home" className='lh-link'>Home</a>
                    </div>
                    <div className="lh-subsect">
                        &gt; <a href="#highlights" className='lh-link'>Highlights</a>
                    </div>
                    <div className="lh-subsect">
                        &gt; <a href="#skills" className='lh-link'>Skills</a>
                    </div>
                    <div className="lh-subsect">
                        &gt; <a href="#projects" className='lh-link'>Projects</a>
                    </div>
                    <div className="lh-subsect">
                        &gt; <a href="#about" className='lh-link'>About</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftHalf;