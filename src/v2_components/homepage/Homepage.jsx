import Header from '../header/Header';
import Footer from '../footer/Footer';
import './homepage.css';
import home_photo from '../../img/homephoto.png';
import sparkle_divider from '../../img/sparkle_divider.png';
import plant_head from '../../img/plant_head.png';
import portfolio from '../../files/portfolio.pdf';
import ht6_mockup from '../../img/ht6_mockup.png';
import airate_mockup from '../../img/airate_mockup.png';
import skinhance_mockup from '../../img/skinhance_mockup.png';
import csc_logo from '../../img/csclogo.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='home' id='home'>
            <div className="home-wrapper">
                <div className="home-header">
                    <Header/>
                </div>

                <div className="home-intro-wrapper">
                    <div className="home-intro-left-margin"></div>
                    <div className="home-intro-text-wrapper">
                        <div className="home-intro-title">
                            hey, i’m <b className='text-purple'>kim</b>!
                        </div>
                        <div className="home-intro-body">
                            As a <b className='text-purple'>multidisciplinary designer and developer</b> passionate about technology and graphic design, I strive to combine design and development software to create seamless products and experiences for everyone to enjoy!
                        </div>
                    </div>
                    <div className="home-intro-image-wrapper">
                        <img src={home_photo} alt='girl with dragon on head' className='home-intro-image'></img>
                    </div>
                    <div className="home-intro-right-margin"></div>
                </div>

                <div className="home-sparkle-divider-wrapper">
                    <img src={sparkle_divider} alt='sparkles divider' classname='home-sparkle-divider'></img>
                </div>

                <div className="home-hl-wrapper">
                    <div className="home-title">
                        💫 highlights/experiences
                    </div>
                    <div className="home-hl-text-wrapper">
                    <div className="home-hl-header">
                        Hack the 6ix Organizing Team ––––––––––––––––––––––––––––––––––––––––––––––––––––––– Nov 2023 - Present 
                    </div>        
                    <div className="home-hl-body">
                        Design Executive
                    </div>  
                    <div className="home-hl-header">
                        UWaterloo Computer Science Club –––––––––––––––––––––––––––––––––––––––––––––––––– Aug 2023 - Present
                    </div>        
                    <div className="home-hl-body">
                        Designer, Community Representative Lead
                    </div>  
                    <div className="home-hl-header">
                        Bayview FBLA –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Jun 2020 - Jun 2023
                    </div>        
                    <div className="home-hl-body">
                        President (Previous: VP Training, Junior Representative)
                    </div>    
                    </div>  
                    <div className="home-ph-wrapper">
                        <img src={plant_head} alt='plant head peeker' className='home-ph-img'></img>
                    </div>                  
                </div>

                


                <div className="home-ts-wrapper">
                    <div className="home-title">
                        📚 design/development stack
                    </div>
                    <div className="home-ts-text-wrapper">       
                        <div className="home-ts-body">
                            <b>Design tools:</b> Figma, MockFlow, Adobe Creative Cloud (Photoshop, Illustrator, InDesign, Premiere Pro, Lightroom), Blender (CAD software)
                        </div>  
                        <div className="home-ts-body">
                            Development/data analysis tools:
                            <ul>
                                <li><b>Languages/frameworks:</b> Java, Python, C, C++, R, Excel, MATLAB, SQL, HTML5, CSS3, JavaScript/TypeScript, React, Angular, Flask, Streamlit, Matplotlib, Numpy, BeautifulSoup, pandas, scikit-learn, Shell Script</li>
                                <li><b>Additional tools:</b> Git, Power BI, Jupyter Notebook, Postman API, REST APIs</li>
                            </ul>
                        </div>  
                    </div>                    
                </div>


                <div className="home-fw-wrapper">
                    <div className="home-title">
                        📝 featured work
                    </div>
                    <div className="home-fw-items-wrapper">       
                        <div className="home-fw-item-wrapper">
                            <div className="home-fw-item-img-wrapper">
                                <img src={ht6_mockup} alt='hack the 6ix mockup' className='home-fw-item-img-ht6'></img>
                            </div>
                            <div className="home-fw-item-text-wrapper">
                                <div className="home-fw-item-title">
                                    Hack the 6ix
                                </div>
                                <div className="home-fw-item-subtitle">
                                    Design Executive
                                </div>
                                <div className="home-fw-item-body">
                                    For the Hack the 6ix Organizing Team, I have been working on the 2024 website and dashboard designs, as well as creating visual assets to be used for the website and merchandise. 
                                </div>
                                <div className="home-fw-item-explore">
                                    Explore -&gt;
                                </div>
                            </div>
                        </div>  

                        <div className="home-fw-item-wrapper">
                            <div className="home-fw-item-img-wrapper-csc">
                                <img src={csc_logo} alt='UW CSC logo' className='home-fw-item-img-csc'></img>
                            </div>
                            <div className="home-fw-item-text-wrapper">
                                <div className="home-fw-item-title">
                                UWaterloo Computer Science Club
                                </div>
                                <div className="home-fw-item-subtitle">
                                Designer, Community Representative Lead
                                </div>
                                <div className="home-fw-item-body">
                                As a designer and a reps lead, I have created several designs for marketing posts, worked on the designs for merchandise, and contributed to the CS Class Profile (graduating class data).                                </div>
                                <div className="home-fw-item-explore">
                                <Link to='/UW_CS_Club' className='home-explore-link'>Explore -&gt;</Link>
                                </div>
                            </div>
                        </div>

                        <div className="home-fw-item-wrapper">
                            <div className="home-fw-item-img-wrapper">
                                <img src={skinhance_mockup} alt='skinhance mockup' className='home-fw-item-img-skinhance'></img>
                            </div>
                            <div className="home-fw-item-text-wrapper">
                                <div className="home-fw-item-title">
                                Skinhance
                                </div>
                                <div className="home-fw-item-subtitle">
                                Designer, Data Analyst, Developer
                                </div>
                                <div className="home-fw-item-body">
                                With my passion for East Asian skincare, I created a database of 350 skincare products through YesStyle web scraping, and used ML algorithms to analyze similarity between each product.                                </div>
                                <div className="home-fw-item-explore">
                                    Explore -&gt;
                                </div>
                            </div>
                        </div> 

                        <div className="home-fw-item-wrapper">
                            <div className="home-fw-item-img-wrapper">
                                <img src={airate_mockup} alt='airate mockup on iphone' className='home-fw-item-img-airate'></img>
                            </div>
                            <div className="home-fw-item-text-wrapper">
                                <div className="home-fw-item-title">
                                Airate
                                </div>
                                <div className="home-fw-item-subtitle">
                                UI/UX Designer, Front-End Eeveloper
                                </div>
                                <div className="home-fw-item-body">
                                In light of the forest fires in Canada/USA around June 2023, we created an community-based application that would inform the users about the air quality in various regions. 
                                </div>                                
                                <div className="home-fw-item-explore">
                                    Explore -&gt;
                                </div>
                            </div>
                        </div>  
                         
                    </div>                    
                </div>

                <div className="home-btn-wrapper">
                <div className="home-see-more-btn">
                    <a href={portfolio} className='home-see-more-link'>See More</a>
                </div>
                </div>
                
                <div className="home-footer">
                    <Footer/>
                </div>


            </div>
        </div>
    )
}

export default Homepage;