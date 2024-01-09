import './highlights.css';
import ht6logo from '../../img/ht6logo.png';
import csclogo from '../../img/csclogo.png';

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
                    </div>
                    <div className='hl-card'>
                        <div className='hl-img-wrapper'>
                            <img src={csclogo} alt='csc logo' className='hl-card-img-csc'></img>
                        </div>
                        <div className='hl-card-org'>UW Computer Science Club</div>
                        <div className='hl-card-position'>Community Rep Lead + Designer</div>
                    </div>
                    <div className='hl-card'>
                        <div className='hl-img-wrapper'>
                            <img src='' alt='something logo' className='hl-card-img'></img>
                        </div>
                        <div className='hl-card-org'>Something</div>
                        <div className='hl-card-position'>something</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights;