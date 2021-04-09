import React from 'react';
import { useSelector } from 'react-redux';
import { bool } from 'prop-types';
import { currentLanguageSelector } from '../../redux/selectors';
import { THUMBNAILS } from '../../assets/images';
import { projectsPropType } from '../../types';
import {
  Description,
  Link,
  ProjectItem,
  RepoIcon,
  SeeIcon,
  Thumbnail,
  Title
} from './styles';

const a = THUMBNAILS;

const ProjectDetails = ({ displayThumbnails, project }) => {
  const languageSelected = useSelector(currentLanguageSelector);

  return (
    <ProjectItem key={project.title}>
      <Link href={project.url} rel="noopener noreferrer" target="_Blank">
        <Title>
          {project.title}
          <SeeIcon className="far fa-eye" />
        </Title>
      </Link>
      <Description>{project.description[languageSelected]}</Description>

      <Link href={project.repo} rel="noopener noreferrer" target="_Blank">
        <p className="project__repo">
          <RepoIcon className="fab fa-github-alt" />
          {project.repo.replace('https://github.com', '')}
        </p>
      </Link>
      {displayThumbnails && (
        <Link href={project.url} rel="noopener noreferrer" target="_Blank">
          <Thumbnail src={THUMBNAILS[project.thumbnail]} alt={project.title} />
        </Link>
      )}
    </ProjectItem>
  );
};

ProjectDetails.propTypes = {
  displayThumbnails: bool.isRequired,
  project: projectsPropType.isRequired
};

export default ProjectDetails;
