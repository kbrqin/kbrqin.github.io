// Example Projects.jsx
import React from 'react';
import ProjectsAll from '../../components/projects-items/ProjectsAll';

const Projects = ({ theme }) => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectsAll theme={theme} /> 
    </div>
  );
};

export default Projects;