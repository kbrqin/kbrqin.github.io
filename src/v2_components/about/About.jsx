import Header from '../header/Header';
import './about.css';
import about_img from '../../img/about_photo.png';
import about_dragon from '../../img/about_dragon.png';
import Footer from '../footer/Footer';
import drag1_icon from '../../img/v3_img/drag1_icon.png';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-wrapper">
            <Header/>
                
                
                <div className="about-body">
                    <div className="w-heading">
                        <div className="heading-icon-wrapper">
                            <img src={drag1_icon} alt='dragon icon 1' className='heading-icon'></img>
                        </div>
                            <div className="heading-text-wrapper">
                                <h2>about me</h2>
                            </div>
                            
                    </div>

                    <div className="about-content-wrapper">
                        <div className="about-text-wrapper">
                            <div className="about-text">
                                Hi, I'm Kim, a <b className='text-purple'>computer science</b> student at the University of Waterloo, also working towards a role in graphic and UI/UX design. 
                            </div>
                            <div className="about-text">
                                Throughout my childhood, I've drawn and done various types of visual arts as a hobby, from realism sketching to doodling to the more artistic side of bullet journaling. 
                            </div>
                            <div className="about-text">
                                Moreover, I've also been vastly interested in technology and its applications since childhood, as I started experimenting with digital drawings and sketches when I got my first tablet with a round tip stylus at around 8 years old, and I also learned HTML/CSS and created a basic French website when I got my first laptop at around fifth grade.
                            </div>
                            <div className="about-text">
                                With the development of my childhood interests, so has technology, and thus, with the past few years, I have been branching out from just art to UI/UX design and full-stack development. 
                            </div>
                        </div>
                        <div className="about-abt-img-wrapper">
                            <img src={about_img} alt='picture of myself!' className='about-abt-img'></img>
                        </div>
                    </div>
                    <div className="about-text-2">
                        Aside from web design and development, I also enjoy collecting plushes, and one in particular has been my favourite these past few months - you can see it below!
                    </div>
                    <div className="about-abt-dragon-wrapper">
                        <img src={about_dragon} alt='picture of my dragon!' className='about-abt-dragon-img'></img>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default About;