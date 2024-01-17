import './psrighthalf.css';
import airate_mockup from '../../../../img/airate_mockup.jpg';
import fliprem_mockup from '../../../../img/fliprem_mockup.jpg';
import noted_mockup from '../../../../img/noted_mockup.png';
import comingsoon from '../../../../img/comingsoon.png';

const PSRightHalf = () => {
    return (
        <div className='psrh'>
            <div className="psrh-wrapper">
                <div className="psrh-heading"><a href='/'>Kim</a>/Projects</div>
                <div className="psrh-desc-wrapper">
                    <div className="psrh-desc">
                    Here&#39;s a library of the design and programming projects that I’ve worked on recently!
                    </div>
                </div>

                <div className="prsh-divider-wrapper">
                    <div className="prsh-divider"></div>
                </div>

                <div className="prsh-projects-wrapper">
                    <div className="prsh-project-item-wrapper">
                        <div className="prsh-project-info-wrapper">
                            <div className="prsh-project-heading">Skinhance</div>
                            <div className="prsh-project-desc">
                                <ul>
                                    <li className='prsh-project-desc-item'>Coming soon!</li>
                                    <li className='prsh-project-desc-item'>-</li>
                                </ul>
                            </div>
                            <div className="prsh-project-tags-wrapper">
                                <div className="prsh-project-tag-design">design</div>
                                <div className="prsh-project-tag-dev">development</div>
                            </div>
                        </div>
                        <div className="prsh-project-img-wrapper">
                            <img src={comingsoon} alt='coming soon!' className='prsh-project-img'></img>
                        </div>
                    </div>
                    <div className="prsh-project-item-wrapper">
                        <div className="prsh-project-info-wrapper">
                            <div className="prsh-project-heading">Airate</div>
                            <div className="prsh-project-desc">
                                <ul>
                                    <li className='prsh-project-desc-item'>A community-based air quality tracking application to keep users informed about their health needs.</li>
                                    <li className='prsh-project-desc-item'>Tools used: Figma, HTML5, CSS3, PHP, MySQL, Google Maps API.</li>
                                </ul>
                            </div>
                            <div className="prsh-project-tags-wrapper">
                                <div className="prsh-project-tag-design">design</div>
                                <div className="prsh-project-tag-dev">development</div>
                            </div>
                        </div>
                        <div className="prsh-project-img-wrapper">
                            <img src={airate_mockup} alt='airate mockup' className='prsh-project-img'></img>
                        </div>
                    </div>
                    <div className="prsh-project-item-wrapper">
                        <div className="prsh-project-info-wrapper">
                            <div className="prsh-project-heading">fliprem!</div>
                            <div className="prsh-project-desc">
                                <ul>
                                    <li className='prsh-project-desc-item'>An educational matching card game to help users learn math and retain memory more easily.</li>
                                    <li className='prsh-project-desc-item'>Tools used: Figma, HTML5, CSS3, JavaScript.</li>
                                </ul>
                            </div>
                            <div className="prsh-project-tags-wrapper">
                                <div className="prsh-project-tag-design">design</div>
                                <div className="prsh-project-tag-dev">development</div>
                            </div>
                        </div>
                        <div className="prsh-project-img-wrapper">
                            <img src={fliprem_mockup} alt='fliprem mockup' className='prsh-project-img'></img>
                        </div>
                    </div>
                    <div className="prsh-project-item-wrapper">
                        <div className="prsh-project-info-wrapper">
                            <div className="prsh-project-heading">Noted</div>
                            <div className="prsh-project-desc">
                                <ul>
                                    <li className='prsh-project-desc-item'>An AI-powered learning companion application concept, featuring a task management system, note-taking pages, and AI-powered practice sets generators.</li>
                                    <li className='prsh-project-desc-item'>Tools used: Figma, MockFlow.</li>
                                </ul>
                            </div>
                            <div className="prsh-project-tags-wrapper">
                                <div className="prsh-project-tag-design">design</div>
                            </div>
                        </div>
                        <div className="prsh-project-img-wrapper">
                            <img src={noted_mockup} alt='noted mockup' className='prsh-project-img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PSRightHalf;