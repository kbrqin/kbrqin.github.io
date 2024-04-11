import Header from '../header/Header';
import './airate.css';
import airate_header from '../../img/airate_header.png';
import airate_color_1 from '../../img/airate_color_1.png';
import airate_color_2 from '../../img/airate_color_2.png';
import airate_design_1 from '../../img/airate_design_1.png';
import airate_design_2 from '../../img/airate_design_2.png';
import Footer from '../footer/Footer';

const Airate = () => {
    return (
        <div className='airate' id='airate'>
            <div className="airate-wrapper">
                <Header/>
                <div className="airate-header-img-wrapper">
                    <img src={airate_header} alt='airate header picture' className='airate-header-img'></img>
                </div>
                <div className="airate-title">airate</div>
                <div className="airate-subtitle"><b>Timeline:</b> Aug 18-20, 2023</div>
                <div className="airate-subtitle"><b>Tools:</b> Figma, HTML, CSS, PHP, JavaScript, MySQL</div>
                <div className="airate-subtitle"><b>Team:</b> Myself (designer + front-end developer), 2 back-end developers, one other front-end developer</div>
                <div className="airate-divider">&mdash;</div>
                <div className="airate-header">preface</div>
                <div className="airate-text">Airate is a mobile web-based application that I created as part of a team of 4 for the Hack the 6ix 2023 hackathon. We designed Airate to be a community-based air quality tracking application, where users can keep each other informed about the air quality in their region, so that they can stay up-to-date with the necessary precautions to stay safe if, for example, the air quality in their region is low enough to where users should put on protective equipment before going outside.</div>
                <div className="airate-header">inspirations</div>
                <div className="airate-text">Since around June 2023, the air quality in Canada, particularly in British Columbia, Ontario and Quebec, was extremely low—considered to have some of the worst air quality ratings in the world—to the point where health professionals recommended taking precautions such as closing one’s windows, using several air purifiers at home, and wearing masks when exiting the house and going outside. In some areas, we could even see the orangish tint of and the haze in the sky, as well as the abnormal look of the Sun in the sky too.</div>
                <div className="airate-text">This sparked our interest in creating an application that will help many to stay safe, especially those with respiratory illnesses or weaker bodily functions, as those who are uninformed may suffer extreme consequences if they are unaware of the poor air quality in their region. By creating an application where users can crowdsource information about the air quality in their region, users can have the government data, as well as real-time and real human inputs regarding the air quality, to benefit each other and keep each other safe.</div>
                <div className="airate-header">how it works</div>
                <div className="airate-text">The application consists of several features. The main page boasts a simple map UI, similar to your default map app, but with landmark points showing the air quality ratings for the day provided by the other users who contributed ratings that day. The the bottom right corner has an expandable navigation bar, where the user can choose between several options: to contribute their own rating for their region during the day, rating the air quality based on the Ontario AQHI scale, as well as a profile section, where they can see their own profile, a weekly leaderboard (which mainly acts as an incentive for users to contribute more ratings), and a history of the user’s own ratings. Finally, there is also a “Favourites” page, where the user can bookmark certain cities around the world to quickly check the air quality instead of having to manually search it every time they want to see its air quality rating.</div>
                <div className="airate-header">initial design</div>
                <div className="airate-text">The initial design had a colour scheme that was green and orange-based to reflect the severity and gloominess of the air quality situation and to be on theme with the forest fires, which is what Airate was inspired by. The colour palette can be seen below:</div>
                <div className="airate-img-wrapper">
                    <img src={airate_color_1} alt='airate colour palette v1' className='airate-img'></img>
                </div>
                <div className="airate-text">Thus, the initial UI/UX design looked like the following, with the info button (bottom right green circle) being a pull-out navigation bar for the application:</div>
                <div className="airate-img-wrapper">
                    <img src={airate_design_1} alt='airate design v1' className='airate-img'></img>
                </div>
                <div className="airate-header">processes and final design</div>
                <div className="airate-text">As the design developed, I worked on modernizing it, both with regards to the UI and UX, given that using the dark green colour for the background caused the initial design to look a bit old-fashioned. As well, the colour scheme was initially a bit inconsistent, given tht some of the buttons were pink in order to match the login logo. </div>
                <div className="airate-text">Thus, I modified the colour scheme to focus on an off-white and grey colour scheme with pink and yellow accents, and the pink and yellow are used for a colour gradient (from yellow to pink) to represent a range of air quality ratings. This new colour scheme was decided on with the intention of not overwhelming the users of the application with too many colours. The updated colour palette is below:</div>
                <div className="airate-img-wrapper">
                    <img src={airate_color_2} alt='airate colour palette v2' className='airate-img'></img>
                </div>
                <div className="airate-text">Regarding the UX updates, the initial UX focused more on buttons and tapping/clicking, however, given that the application is mobile-focused, I also implemented some swiping interactions to provide the users with a smoother feel on the client side.</div>
                <div className="airate-text">The final design is shown to the right, with the final product having a similar style to the Apple Maps app, from which a large portion of inspiration for the UI design of the application is derived because of the sleekness of the Apple Maps application.</div>
                <div className="airate-img-wrapper">
                    <img src={airate_design_2} alt='airate design v2' className='airate-img'></img>
                </div>
                <div className="airate-header">challenges we faced</div>
                <div className="airate-text">One of our roadblocks was that we spent a bit too much time working on the design of this application, and since this was a submission to a hackathon (Hack the 6ix 2023), we were running low on time to work on the actual code portion of the application, and since our Figma designs were quite complex, this proved to be difficult to complete with the limited time remaining. This is mainly a note to look back on during future projects, as the design of a product is extremely important, but what matters more is managing one’s time well enough to create a working submission in the end.</div>
                <div className="airate-text">Another difficulty that we ran into was integrating the front-end with the back-end and server, given the multiple interactive points of the application, the database managing the users and their accounts, and the need to add real-time data into a collective map that required live (or relatively frequent) updating.</div>
                <div className="airate-header">what's next?</div>
                <div className="airate-text">For Airate, we plan to implement features such as AI image recognition to analyze pictures of the air and determine the air quality rating that way to improve the accuracy of the users’ ratings, as well as incorporating open-source data from weather APIs and Environment Canada air quality statistics to bring in more information for the users. These improvements are mainly targeted towards helping users increase their health awareness and improve their air quality safety precaution measures.</div>
                <Footer/>
            </div>
        </div>
    )
}

export default Airate;