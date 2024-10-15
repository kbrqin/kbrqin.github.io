import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../../data/projects/projects';

import './project_lists.css';

const ProjectsAll = ({ theme }) => {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} theme={theme} />
      ))}
    </div>
  );
};

export default ProjectsAll;