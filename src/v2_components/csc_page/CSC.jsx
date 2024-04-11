import Header from '../header/Header';
import './csc.css';
import csc_header from '../../img/csc_header.png';
import csc_design from '../../img/csc_design.png';
import csc_reps_w24 from '../../img/csc_reps_w24.png';
import csc_reps_f23 from '../../img/csc_reps_f23.png';
import csc_cp from '../../img/csc_cp.png';
import Footer from '../footer/Footer';


const CSC = () => {
    return (
        <div className='csc' id='csc'>
            <div className="d-wrapper">
                <Header/>
                <div className="csc-header-img-wrapper">
                    <img src={csc_header} alt='csc header picture' className='csc-header-img'></img>
                </div>
                <div className="csc-title">uwaterloo <b className='text-purple'>computer science</b> club</div>
                <div className="csc-header">preface</div>
                <div className="csc-text">As an organizing committee executive of the UW Computer Science Club (UWCSC), I have participated in organizing many of the club’s projects and events throughout the past two terms, during which I have been a part of CSC. I am a designer and community representative for the club, and during this current term, I hold the role of the community representative lead and have been leading 4 initiatives, which include: club swag ideation, finances, and logistics; the CS club class profile, which is a website of the compiled survey data of each year’s graduating class; and engagement and internship initiatives.</div>
                <div className="csc-header">csc <b className='text-purple'>design</b></div>  
                <div className="csc-text">As a designer for CSC, I mainly create social media marketing posts for the club, and have also contributed to the Class of 2023 Class Profile UI/UX design as well. </div>
                <div className="csc-text">Regarding marketing posts, I have created over 15 posts for the club which have been marketed on Instagram and to the club’s online Discord server. A small selection of them are provided below.</div>
                <div className="csc-img-wrapper">
                    <img src={csc_design} alt='marketing posts for UWCSC' className='csc-img'></img>
                </div>
                <div className="csc-header">csc <b className='text-purple'>reps</b></div>
                <div className="csc-text">As a community representative for the UW CS Club, I have ideated and worked on two iterations of club swag during these past two terms. </div>
                <div className="csc-h2">Winter 2024</div>
                <div className="csc-text">In Winter 2024, we decided to create several new swag designs, being a sweater (ASCII goose design, refreshed from a previous binary goose), a Waterloo campus-themed tote bag design, and two new summer-themed sticker designs. The reps side of the club, which I led, worked on the ideation of and feedback for the designs, and the design team focused on the actual art/graphic of the swag designs. The designs can be viewed below—the two sticker designs are on the left, the tote bag design is in the middle, and a mockup of the sweater design can be viewed on the right.</div>
                <div className="csc-img-wrapper">
                    <img src={csc_reps_w24} alt='reps w24 swag designs' className='csc-img'></img>
                </div>
                <div className="csc-h2">Fall 2023</div>
                <div className="csc-text">In Fall 2023, we redesigned our previous lambda calculus t-shirt, and created two versions of Codey-related stickers (Codey is our club mascot that can be seen in many of the above marketing posts). These designs went through several iterations of design and feedback, and we also polled the student body for feedback on the designs before we finalized them. The designs can be seen below.</div>
                <div className="csc-img-wrapper">
                    <img src={csc_reps_f23} alt='reps f23 swag designs' className='csc-img'></img>
                </div>      
                <div className="csc-header">csc <b className='text-purple'>class profile</b></div>
                <div className="csc-text">The CS Class Profile is a compilation of each year’s CS/CFM/CSBBA graduating class, including data from their academics to their intimate life. I worked on the Class Profile from multiple teams—from the design end, I contributed to the UI/UX of the website, and from the reps end, I wrote the paragraph/analysis content of the website. A preview of it is below, and the full class profile can be viewed on the <a href='https://csclub.uwaterloo.ca/classprofile/2023/' className='csc-link'>club website</a>. </div>          
                <div className="csc-img-wrapper">
                    <img src={csc_cp} alt='cs class profile mockup' className='csc-img'></img>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default CSC;