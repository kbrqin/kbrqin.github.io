import About from '../about/About';
import Projects from '../projects/Projects';
import leftpic from '../../img/leftpic.png';
import './lefthalf.css';
import { HashLink } from 'react-router-hash-link';

const LeftHalf = () => {
    return (
        <div className='lh'>
            <div className="lh-wrapper">
                <div className="lh-pic-wrapper">
                    <img src={leftpic} alt='self illustration' className='lh-pic'></img>
                </div>
                <div className="lh-nav-wrapper">
                    <div className="lh-subsect">
                        &gt; <HashLink to="#home" className='lh-link'>Home</HashLink>
                    </div>
                    <div className="lh-subsect">
                        &gt; <HashLink to="#highlights" className='lh-link'>Highlights</HashLink>
                    </div>
                    <div className="lh-subsect">
                        &gt; <HashLink to="#skills" className='lh-link'>Skills</HashLink>
                    </div>
                    <div className="lh-subsect">
                        &gt; <HashLink to="#projects" className='lh-link'>Projects</HashLink>
                    </div>
                    <div className="lh-subsect">
                        &gt; <HashLink to="#about" className='lh-link'>About</HashLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftHalf;