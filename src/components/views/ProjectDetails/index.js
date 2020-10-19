import React from 'react';
import { string, bool } from 'prop-types';
import { projectsPropType } from '../../../types';
import {
  ProjectItem,
  ProjectLink,
  ProjectTitle,
  ProjectTitleIcon,
  ProjectDescription,
  ProjectRepoIcon,
  ProjectThumbnail
} from './styles';

const ProjectDetails = ({ project, language, displayThumbnails }) => (
  <ProjectItem key={project.title}>
    <ProjectLink href={project.url} target="_Blank" rel="noopener noreferrer">
      <ProjectTitle>
        {project.title}
        <ProjectTitleIcon className="far fa-eye" />
      </ProjectTitle>
    </ProjectLink>
    <ProjectDescription>{project.description[language]}</ProjectDescription>

    <ProjectLink href={project.repo} target="_Blank" rel="noopener noreferrer">
      <p className="project__repo">
        <ProjectRepoIcon className="fab fa-github-alt" />
        {project.repo.replace('https://github.com', '')}
      </p>
    </ProjectLink>
    {displayThumbnails && (
      <ProjectLink href={project.url} target="_Blank" rel="noopener noreferrer">
        <ProjectThumbnail src={project.thumbnail} alt={project.title} />
      </ProjectLink>
    )}
  </ProjectItem>
);

ProjectDetails.propTypes = {
  project: projectsPropType.isRequired,
  language: string.isRequired,
  displayThumbnails: bool.isRequired
};

export default ProjectDetails;
