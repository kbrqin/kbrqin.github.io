// Example Projects.jsx
import React from 'react';
import ProjectsAll from '../../components/projects-items/ProjectsAll';

import './projects.css';

const Projects = ({ theme }) => {
  return (
    <div className='projects'>
      <h1>projects</h1>
      <ProjectsAll theme={theme} /> 
    </div>
  );
};

export default Projects;