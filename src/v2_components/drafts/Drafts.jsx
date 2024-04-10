import Header from '../header/Header';
import './drafts.css';

const Drafts = () => {
    return (
        <div className='d' id='drafts'>
            <div className="d-wrapper">
                <Header/>
                <div className="d-title">drafts</div>
                <div className="d-text">Here is a collection of some random (mostly art-related) drafts and sketches that I’ve been working on in my free time!</div>
                <div className="d-text">(stay tuned, coming soon!)</div>
            </div>
        </div>
    )
}

export default Drafts;