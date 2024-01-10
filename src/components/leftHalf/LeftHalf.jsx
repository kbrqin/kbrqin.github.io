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
                    <div className="lh-projects">&gt; Projects</div>
                    <div className="lh-about">&gt; About</div>
                </div>
            </div>
        </div>
    )
}

export default LeftHalf;