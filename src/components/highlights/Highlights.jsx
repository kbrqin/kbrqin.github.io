import './highlights.css';
import ht6logo from '../../img/ht6logo.png';
import csclogo from '../../img/csclogo.png';
import fblalogo from '../../img/fblalogo.png';

const Highlights = () => {
    return (
        <div className='hl'>
            <div className='hl-wrapper'>
                <div className='hl-heading'>Highlights/Experiences</div>
                <div className='hl-card-wrapper'>
                    <div className='hl-card'>
                        <div className='hl-img-wrapper'>
                            <img src={ht6logo} alt='hack the 6ix logo' className='hl-card-img-ht6'></img>
                        </div>
                        <div className='hl-card-org'>Hack the 6ix</div>
                        <div className='hl-card-position'>Design Executive</div>
                        <div className="hl-card-time">Nov 2023 - Present</div>
                    </div>
                    <div className='hl-card'>
                        <div className='hl-img-wrapper'>
                            <img src={csclogo} alt='csc logo' className='hl-card-img-csc'></img>
                        </div>
                        <div className='hl-card-org'>UW Computer Science Club</div>
                        <div className='hl-card-position'>Community Rep Lead + Designer</div>
                        <div className="hl-card-time">Aug 2023 - Present</div>
                    </div>
                    <div className='hl-card'>
                        <div className='hl-img-wrapper'>
                            <img src={fblalogo} alt='fbla logo' className='hl-card-img-fbla'></img>
                        </div>
                        <div className='hl-card-org'>Bayview FBLA</div>
                        <div className='hl-card-position'>President</div>
                        <div className="hl-card-time">2020-2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights;