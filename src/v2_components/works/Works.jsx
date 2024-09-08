import Header from '../header/Header';
import './works.css';
import flower_icon from '../../img/v3_img/flower_icon.png';
import flower_bud_icon from '../../img/v3_img/flower_bud_icon.png';
import sprout_icon from '../../img/v3_img/sprout_icon.png';
import { Link } from 'react-router-dom';
import HoverDivLink from '../see_more_button/HoverDivLink';
import Footer from '../footer/Footer';


const Works = () => {
    return (
        <div className='w' id='works'>
            <div className="w-wrapper">
                <Header/>
                <div className="w-content">
                    <div className="w-sect">
                        <div className="w-heading">
                            <div className="heading-icon-wrapper">
                                <img src={flower_icon} alt='flower icon' className='heading-icon'></img>
                            </div>
                                <div className="heading-text-wrapper">
                                    <h2>work</h2>
                                </div>
                                
                        </div>
                        <p className='w-pgh'>
                            These are some of the positions I've held recently and the work I've done in each role!
                            </p> 
                        <div className="w-gallery">
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Web Designer + Developer</p>
                                        <p className='w-card-company'>Universus Media Group</p>
                                        <p className='w-card-subinfo'>May 2024 - Aug 2024</p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Design Director</p>
                                        <p className='w-card-company'>Hack the 6ix Organizing Team</p>
                                        <p className='w-card-subinfo'>Nov 2023 - Present</p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/Hack_the_6ix"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Web Design Lead</p>
                                        <p className='w-card-company'>UWaterloo Computer Science Club</p>
                                        <p className='w-card-subinfo'>Aug 2023 - Present</p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/UW_CS_Club"/>
                                </div>
                            </div>    
                        </div>
                    </div>

                    <div className="w-sect">
                        <div className="w-heading">
                            <div className="heading-icon-wrapper">
                                <img src={flower_bud_icon} alt='flower bud icon' className='heading-icon'></img>
                            </div>
                                <div className="heading-text-wrapper">
                                    <h2>projects</h2>
                                </div>
                                
                        </div>
                        <p className='w-pgh'>
                            Here are some projects that I've worked on for hackathons or during my own time :D
                        </p> 
                        <div className="w-gallery">
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Coming soon!</p>
                                        <p className='w-card-subinfo'>
                                            Coming soon :D
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Coming soon!</p>
                                        <p className='w-card-subinfo'>
                                            Coming soon :D
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>re:wind</p>
                                        <p className='w-card-subinfo'>
                                            An AI and machine learning-powered program that automatically video edits a user-uploaded clip and adds sound effects to it.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Skinhance</p>
                                        <p className='w-card-subinfo'>
                                            A content-based recommendation system for popular East Asian skincare products using machine learning algorithms.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                   <HoverDivLink to="/Skinhance"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Airate</p>
                                        <p className='w-card-subinfo'>
                                            A community-based air quality tracking app to ensure up-to-datenes of users with the air quality in their area.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/Airate"/>
                                </div>
                            </div>    
                        </div>
                    </div>


                    <div className="w-sect">
                        <div className="w-heading">
                            <div className="heading-icon-wrapper">
                                <img src={sprout_icon} alt='sprout icon' className='heading-icon'></img>
                            </div>
                                <div className="heading-text-wrapper">
                                    <h2>drafts</h2>
                                </div>
                                
                        </div>
                        <p className='w-pgh'>
                            Here are some mini things I've worked on in my own time ~ some sketches and experimentations with various design/development programs :D
                        </p> 
                        <div className="w-gallery">
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Coming soon!</p>
                                        <p className='w-card-subinfo'>
                                            Coming soon :D
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Coming soon!</p>
                                        <p className='w-card-subinfo'>
                                            Coming soon :D
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>
                            <div className="w-card-container">
                                <div className="w-card-content">
                                    <div className="w-card-img-wrapper">

                                    </div>
                                    <div className="w-card-text-wrapper">
                                        <p className='w-card-title'>Coming soon!</p>
                                        <p className='w-card-subinfo'>
                                            Coming soon :D
                                        </p>
                                    </div>
                                </div>
                                <div className="w-dashed-border">
                                    <HoverDivLink to="/works"/>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Works;