import React from 'react';
import { string, bool } from 'prop-types';
import { projectsPropType } from '../../../types';
import {
  ProjectItem,
  Link,
  Title,
  SeeIcon,
  Description,
  RepoIcon,
  Thumbnail
} from './styles';

const ProjectDetails = ({ project, language, displayThumbnails }) => (
  <ProjectItem key={project.title}>
    <Link href={project.url} target="_Blank" rel="noopener noreferrer">
      <Title>
        {project.title}
        <SeeIcon className="far fa-eye" />
      </Title>
    </Link>
    <Description>{project.description[language]}</Description>

    <Link href={project.repo} target="_Blank" rel="noopener noreferrer">
      <p className="project__repo">
        <RepoIcon className="fab fa-github-alt" />
        {project.repo.replace('https://github.com', '')}
      </p>
    </Link>
    {displayThumbnails && (
      <Link href={project.url} target="_Blank" rel="noopener noreferrer">
        <Thumbnail src={project.thumbnail} alt={project.title} />
      </Link>
    )}
  </ProjectItem>
);

ProjectDetails.propTypes = {
  project: projectsPropType.isRequired,
  language: string.isRequired,
  displayThumbnails: bool.isRequired
};

export default ProjectDetails;
