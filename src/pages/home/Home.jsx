import './home.css';
import Button from '../../components/button/Button';
import ProjectsSubset from '../../components/projects-items/ProjectsSubset';
import { useNavigate } from 'react-router-dom'; // Note: You are not using this
import { LuSparkle , LuLinkedin , LuGithub , LuMail} from 'react-icons/lu';
import React from 'react';
import hero_img_light from '../../img/hero-img-light.png';
import hero_img_dark from '../../img/hero-img-dark.png';
import resume_dev from '../../files/resume_dev.pdf';
import resume_design from '../../files/resume_design.pdf';
import abt_me_img from '../../img/abt-me-img.png';
import abt_me_spotify from '../../img/abt-me-spotify.png';

const Home = ({ theme }) => {
  const devButtonClick = () => {
    window.location.href = resume_dev; // Update with your PDF path
  };
  const designButtonClick = () => {
    window.location.href = resume_design; // Update with your PDF path
  };

  const navigate = useNavigate();

  const seeMoreButtonClick = () => {
    navigate('/projects');
  };

  const languages = [
    "python", "c++", "c", "c#", "java", "kotlin", "r", "html", "css", "php", 
    "javascript", "typescript", "sql", "swift", "golang", "shell script", "excel", "matlab"
  ];

  const libs = [
    "tensorflow", "pytorch", "scikit-learn", "numpy", "pandas", "react", "react native", "angular",
    "flask", "node.js", "mongodb", "beautifulsoup"
  ]

  const des_tools = [
    "figma", "blender", "adobe illustrator", "adobe photoshop", "adobe indesign"
  ]

  const dev_tools = [
    "docker", "git", "postman api", "jupyter notebook", "rest apis", "unity", "power bi", "r shiny", "npm"
  ]

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <h1>hey, i'm <span className="purple">kim</span>!</h1>
          <p>
            full-stack developer, ux/ui designer,<br />
            computer science + statistics @uwaterloo.
          </p>
          <div className="hero-buttons">
            {/* Pass the function reference here without parentheses */}
            <Button variant='primary' onClick={devButtonClick}>cv [development]</Button>
            {/* Use an inline function to handle the console log */}
            <Button variant='secondary' onClick={designButtonClick}>cv [design]</Button>
          </div>
        </div>
        <div className="hero-right">
        <img src={theme === 'dark' ? hero_img_dark : hero_img_light} alt="hero image" />
        </div>
      </div>

      <div className="home-abt">
        <h2>about <span className='purple'>me</span></h2>
        <div className="home-abt-content">
          <div className="home-abt-left">
            <p>with a background in both tech and visual arts, i've developed a strong passion for both the development and product design sides of the project lifecycle. as such, i've been taking on roles in both disciplines, developing user-centric products with useful features and reusable components. </p>
            <p>some of my recent and current roles include: ai + full stack developer @paloma, web designer and front-end developer at universus media group, design director at hack the 6ix, and web design lead for uwaterloo's computer science club.</p>
            <p>in my free time, i've been delving into developing machine learning models and optimizing neural networks. outside the terminal, you can find me playing wuthering waves and maybe league of legends (mostly reminiscing about swarm).</p>
          </div>
          <div className="home-abt-right">
            <div className="home-abt-img">
              <img src={abt_me_img} className='abt-img-bg'></img>
              <img src={abt_me_spotify} className="abt-img-spotify"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="home-tech-stack">
        <h2>tech <span className='purple'>stack</span></h2>
        <div className="ts-contents">
        <div className="slash-sect">
          <div className="slash-desc">
          <span><LuSparkle className='icon'/></span><span className='slash-category'>languages</span><span> /</span>
          </div>
          <div className="slash-list">
            <span className='slash-items'>
            {languages.map((item, index) => (
              <React.Fragment key={index}>
                <span style={{ color: 'var(--accent-color)' }}>{item}</span>
                  {index < languages.length - 1 && <span style={{ color: 'var(--text-color)' }}> ⋅ </span>}
              </React.Fragment>
            ))}
            </span>
          </div>
        </div>
        <div className="slash-sect">
          <div className="slash-desc">
          <span><LuSparkle className='icon'/></span><span className='slash-category'>libraries/frameworks</span><span> /</span>
          </div>
          <div className="slash-list">
            <span className='slash-items'>
            {libs.map((item, index) => (
              <React.Fragment key={index}>
                <span style={{ color: 'var(--accent-color)' }}>{item}</span>
                  {index < libs.length - 1 && <span style={{ color: 'var(--text-color)' }}> ⋅ </span>}
              </React.Fragment>
            ))}
            </span>
          </div>
        </div>

        <div className="slash-sect">
          <div className="slash-desc">
          <span><LuSparkle className='icon'/></span><span className='slash-category'>design tools /</span>
          </div>
          <div className="slash-list">
            <span className='slash-items'>
            {des_tools.map((item, index) => (
              <React.Fragment key={index}>
                <span style={{ color: 'var(--accent-color)' }}>{item}</span>
                  {index < des_tools.length - 1 && <span style={{ color: 'var(--text-color)' }}> ⋅ </span>}
              </React.Fragment>
            ))}
            </span>
          </div>
        </div>

        <div className="slash-sect">
          <div className="slash-desc">
          <span><LuSparkle className='icon'/></span><span className='slash-category'>developer tools</span><span> /</span>
          </div>
          <div className="slash-list">
            <span className='slash-items'>
            {dev_tools.map((item, index) => (
              <React.Fragment key={index}>
                <span style={{ color: 'var(--accent-color)' }}>{item}</span>
                  {index < dev_tools.length - 1 && <span style={{ color: 'var(--text-color)' }}> ⋅ </span>}
              </React.Fragment>
            ))}
            </span>
          </div>
        </div>

        </div>
      </div>

      <div className='home-projects'>
        <h2>featured <span className='purple'>work</span></h2>
        <ProjectsSubset theme={theme} />
        <Button variant='primary' onClick={seeMoreButtonClick}>see more</Button>
      </div>

      <div className="home-connect">
        <h2>let's <span className='purple'>connect</span>!</h2>
        <div className="connect-contents">
          
          <div className="slash-sect">
            <div className="slash-desc">
            <span><LuMail className='icon'/></span><span className='slash-category'>email /</span>
            </div>
            <div className="slash-list">
              <span className='slash-item'>
                <a href="mailto:kim.guo@uwaterloo.ca">kim.guo@uwaterloo.ca</a>
              </span>
            </div>
          </div>

          <div className="slash-sect">
            <div className="slash-desc">
            <span><LuLinkedin className='icon'/></span><span className='slash-category'>linkedin /</span>
            </div>
            <div className="slash-list">
              <span className='slash-item'>
                <a href="https://www.linkedin.com/in/kbrqin/" target='_blank'>kbrqin</a>
              </span>
            </div>
          </div>

          <div className="slash-sect">
            <div className="slash-desc">
            <span><LuGithub className='icon'/></span><span className='slash-category'>github /</span>
            </div>
            <div className="slash-list">
              <span className='slash-item'>
                <a href="https://github.com/kbrqin" target='_blank'>kbrqin</a>
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;