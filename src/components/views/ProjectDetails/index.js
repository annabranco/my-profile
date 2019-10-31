import React from 'react';
import { PropTypes } from 'prop-types';
import { projectsPropType } from '../../../types';

const ProjectDetails = ({ project, language, displayThumbnails }) => (
  <li className="project__item" key={project.title}>
    <a
      href={project.url}
      className="project__url-a"
      target="_Blank"
      rel="noopener noreferrer"
    >
      <h3 className="project__title">
        {project.title} <i className="far fa-eye project__title-icon" />
      </h3>
    </a>
    <p className="project__description">{project.description[language]}</p>

    <a
      href={project.repo}
      className="project__url-a"
      target="_Blank"
      rel="noopener noreferrer"
    >
      <p className="project__repo">
        <i className="fab fa-github-alt project__repo--icon" />
        {project.repo.replace('https://github.com', '')}
      </p>
    </a>
    {displayThumbnails && (
      <a
        href={project.url}
        className="project__url-a"
        target="_Blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project__thumbnail"
        />
      </a>
    )}
  </li>
);

ProjectDetails.propTypes = {
  project: projectsPropType.isRequired,
  language: PropTypes.string.isRequired,
  displayThumbnails: PropTypes.bool.isRequired
};

export default ProjectDetails;
