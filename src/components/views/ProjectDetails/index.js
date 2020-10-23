import React from 'react';
import { bool, string } from 'prop-types';
import {
  ProjectItem,
  Link,
  Title,
  SeeIcon,
  Description,
  RepoIcon,
  Thumbnail
} from './styles';
import { projectsPropType } from '../../../types';

const ProjectDetails = ({ displayThumbnails, language, project }) => (
  <ProjectItem key={project.title}>
    <Link href={project.url} rel="noopener noreferrer" target="_Blank">
      <Title>
        {project.title}
        <SeeIcon className="far fa-eye" />
      </Title>
    </Link>
    <Description>{project.description[language]}</Description>

    <Link href={project.repo} rel="noopener noreferrer" target="_Blank">
      <p className="project__repo">
        <RepoIcon className="fab fa-github-alt" />
        {project.repo.replace('https://github.com', '')}
      </p>
    </Link>
    {displayThumbnails && (
      <Link href={project.url} rel="noopener noreferrer" target="_Blank">
        <Thumbnail src={project.thumbnail} alt={project.title} />
      </Link>
    )}
  </ProjectItem>
);

ProjectDetails.propTypes = {
  displayThumbnails: bool.isRequired,
  language: string.isRequired,
  project: projectsPropType.isRequired
};

export default ProjectDetails;
