import Header from '../header/Header';
import Footer from '../footer/Footer';
import SeeMoreBtn from '../see_more_button/SeeMoreBtn';
import './homepage.css';
import home_photo from '../../img/homephoto.png';
import sparkle_divider from '../../img/sparkle_divider.png';
import flower_icon from '../../img/v3_img/flower_icon.png';
import books_icon from '../../img/v3_img/books_icon.png';
import flower_deco from '../../img/v3_img/flower_deco.png';
import doc_icon from '../../img/v3_img/doc_icon.png';
import plant_head from '../../img/plant_head.png';
import portfolio from '../../files/portfolio.pdf';
import ht6_mockup from '../../img/ht6_mockup.png';
import airate_mockup from '../../img/airate_mockup.png';
import skinhance_mockup from '../../img/skinhance_mockup.png';
import csc_logo from '../../img/csclogo.png';
import { Link } from 'react-router-dom';
import HoverDivLink from '../see_more_button/HoverDivLink';
import umg_logo from '../../img/v3_img/umg_logo.png';
import pizza_img from '../../img/v3_img/pizza_img.png';

const Homepage = () => {
    return (
        <div className='home' id='home'>
            <div className="home-wrapper">
                <div className="home-header">
                    <Header/>
                </div>
                <div className="home-hero-wrapper">
                    <div className="home-hero-left">
                        <h1>hey, i'm <b className='text-purple'>kim</b>!</h1>
                        <p>As a <b className='text-purple'>multidisciplinary designer and developer</b> passionate about technology and graphic design, I strive to combine design and development software to create seamless products and experiences for everyone to enjoy!</p>
                    </div>
                    <div className="home-hero-right">
                        <img src={home_photo} alt='girl with dragon on head' className='home-hero-img'></img>
                    </div>
                </div>
                <div className="home-hero-divider">
                    <img src={sparkle_divider} alt='sparkles divider' classname='home-sparkle-divider'></img>
                </div>
                <div className="home-highlights-wrapper">
                    <div className="home-heading">
                        <div className="heading-icon-wrapper">
                            <img src={flower_icon} alt='flower icon' className='heading-icon'></img>
                        </div>
                        <div className="heading-text-wrapper">
                            <h2>highlights/experiences</h2>
                        </div>
                    </div>
                    <div className="home-highlights-body">
                        <div className="hl-card-container">
                            <div className="hl-card-content">
                                <div className="hl-card-img-wrapper">
                                    <img src={umg_logo} alt='universus media group logo'></img>
                                </div>
                                <div className="hl-card-text-wrapper">
                                    <p className='hl-card-title'>Web Designer + Developer</p>
                                    <p className='hl-card-company'>Universus Media Group</p>
                                    <p className='hl-card-timeline'>May 2024 - Aug 2024</p>
                                </div>
                            </div>
                            <div className="home-dashed-border">
                                <HoverDivLink to="/works"/>
                            </div>
                        </div>
                        <div className="hl-card-container">
                            <div className="hl-card-content">
                                <div className="hl-card-img-wrapper">
                                    <img src={ht6_mockup} alt='hack the 6ix image'></img>
                                </div>
                                <div className="hl-card-text-wrapper">
                                    <p className='hl-card-title'>Design Director</p>
                                    <p className='hl-card-company'>Hack the 6ix Organizing Team</p>
                                    <p className='hl-card-timeline'>Nov 2023 - Present</p>
                                </div>
                            </div>
                            <div className="home-dashed-border">
                                <HoverDivLink to="/Hack_the_6ix"/>
                            </div>
                        </div>
                        <div className="hl-card-container">
                            <div className="hl-card-content">
                                <div className="hl-card-img-wrapper">
                                    <img src={csc_logo} alt='uwaterloo cs club logo'></img>
                                </div>
                                <div className="hl-card-text-wrapper">
                                    <p className='hl-card-title'>Web Design Lead</p>
                                    <p className='hl-card-company'>UWaterloo Computer Science Club</p>
                                    <p className='hl-card-timeline'>Aug 2023 - Present</p>
                                </div>
                            </div>
                            <div className="home-dashed-border">
                                <HoverDivLink to="/UW_CS_Club"/>
                            </div>
                        </div>
                        
                    </div>
                    <SeeMoreBtn/>
                </div>
                <div className="home-tech-stack-wrapper">
                    <div className="home-heading">
                        <div className="heading-icon-wrapper">
                            <img src={books_icon} alt='books icon' className='heading-icon'></img>
                        </div>
                        <div className="heading-text-wrapper">
                            <h2>design/development stack</h2>
                        </div>
                    </div>
                    <div className="ts-boxes-wrapper">
                        <div className="ts-flower-deco">
                            <img src={flower_deco} alt="flower"></img>
                        </div>
                        <div className="ts-design">
                            <div className="ts-heading">
                                <h4>design</h4>
                            </div>
                            <div className="ts-items-box">
                                <div className="ts-items-box-content">
                                    <div className="ts-item">Figma</div>
                                    <div className="ts-item">Adobe Photoshop</div>
                                    <div className="ts-item">Adobe Illustrator</div>
                                    <div className="ts-item">Adobe InDesign</div>
                                    <div className="ts-item">Adobe Premiere Pro</div>
                                    <div className="ts-item">Adobe Lightroom</div>
                                    <div className="ts-item">Blender (CAD Software)</div>
                                </div>
                                <div className="home-dashed-border"></div>
                            </div>
                        </div>
                        <div className="ts-langs">
                            <div className="ts-heading">
                                <h4>languages</h4>
                            </div>
                            <div className="ts-items-box">
                                <div className="ts-items-box-content">
                                    <div className="ts-item">Java</div>
                                    <div className="ts-item">Python</div>
                                    <div className="ts-item">C</div>
                                    <div className="ts-item">C++</div>
                                    <div className="ts-item">C#</div>
                                    <div className="ts-item">R</div>
                                    <div className="ts-item">HTML5</div>
                                    <div className="ts-item">CSS3</div>
                                    <div className="ts-item">PHP</div>
                                    <div className="ts-item">JavaScript</div>
                                    <div className="ts-item">TypeScript</div>
                                    <div className="ts-item">SQL</div>
                                    <div className="ts-item">PostgreSQL</div>
                                    <div className="ts-item">Excel</div>
                                    <div className="ts-item">MATLAB</div>
                                    <div className="ts-item">Shell Script</div>
                                </div>
                                <div className="home-dashed-border"></div>
                            </div>
                        </div>
                        <div className="ts-other">
                            <div className="ts-heading">
                                <h4>other tools</h4>
                            </div>
                            <div className="ts-items-box">
                                <div className="ts-items-box-content">
                                    <div className="ts-item">Unity</div>
                                    <div className="ts-item">Power BI</div>
                                    <div className="ts-item">WordPress</div>
                                    <div className="ts-item">Git</div>
                                    <div className="ts-item">Jupyter Notebook</div>
                                    <div className="ts-item">Postman API</div>
                                    <div className="ts-item">REST APIs</div>
                                    <div className="ts-item">FTP Servers</div>
                                    <div className="ts-item">scikit-learn</div>
                                </div>
                                <div className="home-dashed-border"></div>
                            </div>
                        </div>
                        <div className="ts-libfrm">
                            <div className="ts-heading">
                                <h4>libraries/frameworks</h4>
                            </div>
                            <div className="ts-items-box">
                                <div className="ts-items-box-content">
                                    <div className="ts-item">React</div>
                                    <div className="ts-item">Angular</div>
                                    <div className="ts-item">Flask</div>
                                    <div className="ts-item">Streamlit</div>
                                    <div className="ts-item">Matplotlib</div>
                                    <div className="ts-item">Numpy</div>
                                    <div className="ts-item">BeautifulSoup</div>
                                    <div className="ts-item">pandas</div>
                                    <div className="ts-item">scikit-learn</div>
                                </div>
                                <div className="home-dashed-border"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-work-wrapper">
                    <div className="home-heading">
                        <div className="heading-icon-wrapper">
                            <img src={doc_icon} alt='document icon' className='heading-icon'></img>
                        </div>
                        <div className="heading-text-wrapper">
                            <h2>work & projects</h2>
                        </div>
                    </div>
                    <div className="home-work-content-box">
                        <div className="home-work-item-wrapper">
                            <div className="home-work-item-content">
                                <div className="home-work-item-img">
                                    <img src={pizza_img} alt="pizza studio logo"></img>
                                </div>
                                <div className="home-work-item-text-wrapper">
                                    <div className="home-work-title-sect">
                                        <p className="home-work-item-title">Designer + Front-End Developer</p>
                                        <p className="home-work-item-subheading">Pizza Studio [Technova 2024 Winner]</p>
                                    </div>
                                    <p className="home-work-item-desc">
                                        We developed mobile application using React Native and Python Flask to combat domestic violence,
                                        featuring audio recording, processing, and alert-sending capabilities disguised as a pizza ordering app.
                                    </p>
                                    <Link to="/works" className="home-work-link">Explore →</Link>
                                </div>
                            </div>
                            <div className="home-dashed-border"></div>
                        </div>
                        <div className="home-work-item-wrapper">
                            <div className="home-work-item-content">
                                <div className="home-work-item-img">
                                    <img src={umg_logo} alt="univerus media group logo"></img>
                                </div>
                                <div className="home-work-item-text-wrapper">
                                    <div className="home-work-title-sect">
                                        <p className="home-work-item-title">Web Designer + Developer</p>
                                        <p className="home-work-item-subheading">Universus Media Group</p>
                                    </div>
                                    <p className="home-work-item-desc">
                                        At Universus Media Group, I worked on graphic and web design/development projects, including designing and developing websites and creating marketing posts, banner, and logo designs.
                                    </p>
                                    <Link to="/works" className="home-work-link">Explore →</Link>
                                </div>
                            </div>
                            <div className="home-dashed-border"></div>
                        </div>
                        <div className="home-work-item-wrapper">
                            <div className="home-work-item-content">
                                <div className="home-work-item-img">
                                <img src={ht6_mockup} alt="hack the 6ix logo"></img>
                                </div>
                                <div className="home-work-item-text-wrapper">
                                    <div className="home-work-title-sect">
                                        <p className="home-work-item-title">Design Director</p>
                                        <p className="home-work-item-subheading">Hack the 6ix Organizing Team</p>
                                    </div>
                                    <p className="home-work-item-desc">
                                        For the Hack the 6ix Organizing Team, I worked on the UX research and UI/UX design for the 2024 website and dashboard designs, as well as designed swag items and marketing posts for the hackathon.
                                    </p>
                                    <Link to="/Hack_the_6ix" className="home-work-link">Explore →</Link>
                                </div>
                            </div>
                            <div className="home-dashed-border"></div>
                        </div>
                        <div className="home-work-item-wrapper">
                            <div className="home-work-item-content">
                                <div className="home-work-item-img">
                                <img src={csc_logo} alt="uwaterloo computer science logo"></img>
                                </div>
                                <div className="home-work-item-text-wrapper">
                                    <div className="home-work-title-sect">
                                        <p className="home-work-item-title">Web Design Lead (Design Co-Lead)</p>
                                        <p className="home-work-item-subheading">UWaterloo Computer Science Club</p>
                                    </div>
                                    <p className="home-work-item-desc">
                                        For the UWaterloo CS Club, I worked on several iterations of the club's swag (merchandise), designed 20+ marketing posts, and led the web design for various web development projects for the club, such as the UWaterloo CS Class Profile.
                                    </p>
                                    <Link to="/Hack_the_6ix" className="home-work-link">Explore →</Link>
                                </div>
                            </div>
                            <div className="home-dashed-border"></div>
                        </div>
                        {/* add more works here */}
                        <div className="see-more-btn">
                            <SeeMoreBtn/>
                        </div>
                    </div>
                </div>
                
                {/* <div className="home-intro-wrapper">
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
                            <b>Development/data analysis tools:</b>
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
                                    <Link to='/Hack_the_6ix' className='home-explore-link'>Explore -&gt;</Link>
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
                                As a designer and the reps lead, I have created several designs for marketing posts, worked on the designs for merchandise, and contributed to the CS Class Profile (graduating class data).                                </div>
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
                                    <Link to='/Skinhance' className='home-explore-link'>Explore -&gt;</Link>
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
                                UI/UX Designer, Front-End Developer
                                </div>
                                <div className="home-fw-item-body">
                                In light of the forest fires in Canada/USA around June 2023, we created an community-based application that would inform the users about the air quality in various regions. 
                                </div>                                
                                <div className="home-fw-item-explore">
                                <Link to='/Airate' className='home-explore-link'>Explore -&gt;</Link>
                                </div>
                            </div>
                        </div>  
                         
                    </div>                    
                </div>

                <div className="home-btn-wrapper">
                <div className="home-see-more-btn">
                    <a href={portfolio} className='home-see-more-link'>See More</a>
                </div>
                </div> */}
                
                <div className="home-footer">
                    <Footer/>
                </div>


            </div>
        </div>
    )
}

export default Homepage;