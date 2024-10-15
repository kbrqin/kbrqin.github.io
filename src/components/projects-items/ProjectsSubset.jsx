import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../../data/projects/projects';

import './project_lists.css';

const ProjectsSubset = ({ theme }) => {
  // Get the first 5 projects
  const firstFiveProjects = projects.slice(0, 5);

  return (
    <div className="projects-list">
      {firstFiveProjects.map((project) => (
        <ProjectItem key={project.id} project={project} theme={theme} />
      ))}
    </div>
  );
};

export default ProjectsSubset;