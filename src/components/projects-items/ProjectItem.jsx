import React from 'react';
import './projectitem.css';

const ProjectItem = ({ project, theme }) => {
  const isDarkMode = theme === 'dark';

  return (
    <div className={`project-item ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <img src={project.imageUrl} alt={project.title} className="project-img" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <ul className="project-points">
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="project-tools">{project.tools}</p>
      </div>
    </div>
  );
};

export default ProjectItem;