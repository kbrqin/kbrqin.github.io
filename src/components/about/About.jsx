import './about.css';
import headshot from '../../img/headshot.jpg';

const About = () => {
    return (
        <div className='a' id='about'>
            <div className="a-wrapper">
                <div className="a-heading">About</div>
                <div className="a-items-wrapper">
                    <div className="a-content-wrapper">
                        <div className="a-desc">
                            <p>Hi, I’m Kim, a Computer Science student at the University of Waterloo. </p>
                            <p>As someone passionate about both design and development, I hope to create both stunning and accessible products for all to use (and enjoy)!</p>
                        </div>
                    </div>
                    <div className="a-img-wrapper">
                        <img src={headshot} className='a-headshot'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;