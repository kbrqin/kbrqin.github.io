import leftpic from '../../../../img/leftpic.png';
import './pslefthalf.css';

const PSLeftHalf = () => {
    return (
        <div className='pslh'>
            <div className="pslh-wrapper">
                <div className="pslh-pic-wrapper">
                    <img src={leftpic} alt='self illustration' className='pslh-pic'></img>
                </div>

                <div className="pslh-nav-wrapper">
                    <div className="lh-nav-home">
                        &lt; <a href="/" className='lh-link'>Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PSLeftHalf;