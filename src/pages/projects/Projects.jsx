// Example Projects.jsx
import React from 'react';
import ProjectsAll from '../../components/projects-items/ProjectsAll';

import './projects.css';

const Projects = ({ theme }) => {
  return (
    <div className='projects'>
      <h1>projects</h1>
      <p>for more of my design work, check out my <a href='https://skyermine.notion.site/hey-this-is-kim-2bba3bb46eb5427092d765bf3f6d6e1b?pvs=4' target='_blank'>design portfolio</a>!</p>
      <ProjectsAll theme={theme} /> 
    </div>
  );
};

export default Projects;