import './projects.css';
import airate_mockup from '../../img/airate_mockup.jpg';
import noted_mockup from '../../img/noted_mockup.png';
import fliprem_mockup from '../../img/fliprem_mockup.jpg';

const Projects = () => {
    return (
        <div className='p'>
            <div className="p-wrapper">
                <div className="p-heading">Featured Projects</div>
                <div className="p-projects-wrapper">
                    <div className="p-project-item-wrapper">
                        <div className="p-project-info-wrapper">
                            <div className="p-project-heading">Airate</div>
                            <div className="p-project-desc">
                                <ul>
                                    <li className='p-project-desc-item'>A community-based air quality tracking application to keep users informed about their health needs.</li>
                                    <li className='p-project-desc-item'>Tools used: Figma, HTML5, CSS3, PHP, MySQL, Google Maps API.</li>
                                </ul>
                            </div>
                            <div className="p-project-tags-wrapper">
                                <div className="p-project-tag-design">design</div>
                                <div className="p-project-tag-dev">development</div>
                            </div>
                        </div>
                        <div className="p-project-img-wrapper">
                            <img src={airate_mockup} alt='airate mockup' className='p-project-img'></img>
                        </div>
                    </div>
                    <div className="p-project-item-wrapper">
                        <div className="p-project-info-wrapper">
                            <div className="p-project-heading">fliprem!</div>
                            <div className="p-project-desc">
                                <ul>
                                    <li className='p-project-desc-item'>An educational matching card game to help users learn math and retain memory more easily.</li>
                                    <li className='p-project-desc-item'>Tools used: Figma, HTML5, CSS3, JavaScript.</li>
                                </ul>
                            </div>
                            <div className="p-project-tags-wrapper">
                                <div className="p-project-tag-design">design</div>
                                <div className="p-project-tag-dev">development</div>
                            </div>
                        </div>
                        <div className="p-project-img-wrapper">
                            <img src={fliprem_mockup} alt='fliprem mockup' className='p-project-img'></img>
                        </div>
                    </div>
                    <div className="p-project-item-wrapper">
                        <div className="p-project-info-wrapper">
                            <div className="p-project-heading">Noted</div>
                            <div className="p-project-desc">
                                <ul>
                                    <li className='p-project-desc-item'>An AI-powered learning companion application concept, featuring a task management system, note-taking pages, and AI-powered practice sets generators.</li>
                                    <li className='p-project-desc-item'>Tools used: Figma, MockFlow.</li>
                                </ul>
                            </div>
                            <div className="p-project-tags-wrapper">
                                <div className="p-project-tag-design">design</div>
                            </div>
                        </div>
                        <div className="p-project-img-wrapper">
                            <img src={noted_mockup} alt='noted mockup' className='p-project-img'></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;